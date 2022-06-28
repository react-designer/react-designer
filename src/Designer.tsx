import React, { Component } from 'react'
import _ from 'lodash'
import { HotKeys } from 'react-hotkeys'

import InsertMenu from './panels/InsertMenu'
import SVGRenderer from './SVGRenderer'
import Handler from './Handler'
import { modes } from './constants'
import { drag, rotate, scale } from './actions/index'
import { Text, Path, Rect, Circle, Image } from './objects'
import PanelList from './panels/PanelList'

class Designer extends Component<{
  objectTypes: {
    text?: typeof Text
    rectangle?: typeof Rect
    circle?: typeof Circle
    polygon?: typeof Path
    image?: typeof Image
  }
  snapToGrid?: number
  width?: number
  height?: number
  background?: any
  objects?: any[]
  onUpdate?: any
  svgStyle?: any
  insertMenu?: typeof InsertMenu | null
  onImageDrop?: (file: any) => Promise<unknown>
}> {
  static defaultProps = {
    objectTypes: {
      text: Text,
      rectangle: Rect,
      circle: Circle,
      polygon: Path,
      image: Image,
    },
    snapToGrid: 1,
    svgStyle: {},
    insertMenu: InsertMenu,
    onImageDrop: (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
  }

  state = {
    mode: modes.FREE,
    handler: {
      top: 200,
      left: 200,
      width: 50,
      height: 50,
      rotate: 0,
    },
    currentObjectIndex: null,
    selectedObjectIndex: null,
    selectedTool: null,
  }

  keyMap = {
    removeObject: ['del', 'backspace'],
    moveLeft: ['left', 'shift+left'],
    moveRight: ['right', 'shift+right'],
    moveUp: ['up', 'shift+up'],
    moveDown: ['down', 'shift+down'],
    closePath: ['enter'],
  }

  componentWillMount() {
    this.objectRefs = {}
  }

  showHandler(index) {
    let { mode } = this.state
    let { objects } = this.props
    let object = objects[index]

    if (mode !== modes.FREE) {
      return
    }

    this.updateHandler(index, object)
    this.setState({
      currentObjectIndex: index,
      showHandler: true,
    })
  }

  hideHandler() {
    let { mode } = this.state
    if (mode === modes.FREE) {
      this.setState({
        showHandler: false,
      })
    }
  }

  getStartPointBundle(event, object) {
    let { currentObjectIndex } = this.state
    let { objects } = this.props
    let mouse = this.getMouseCoords(event)
    object = object || objects[currentObjectIndex]
    return {
      clientX: mouse.x,
      clientY: mouse.y,
      objectX: object.x,
      objectY: object.y,
      width: object.width,
      height: object.height,
      rotate: object.rotate,
    }
  }

  startDrag(mode, event) {
    let { currentObjectIndex } = this.state
    this.setState({
      mode: mode,
      startPoint: this.getStartPointBundle(event),
      selectedObjectIndex: currentObjectIndex,
    })
  }

  resetSelection() {
    this.setState({
      selectedObjectIndex: null,
    })
  }

  generateUUID() {
    var d = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now() //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
      }
    )
    return uuid
  }

  newObject(event) {
    let { mode, selectedTool } = this.state

    this.resetSelection(event)

    if (mode !== modes.DRAW) {
      return
    }

    let { meta } = this.getObjectComponent(selectedTool)
    let mouse = this.getMouseCoords(event)

    let { objects, onUpdate } = this.props
    let object = {
      ...meta.initial,
      type: selectedTool,
      x: mouse.x,
      y: mouse.y,
      uuid: this.generateUUID(),
    }

    onUpdate([...objects, object])

    this.setState({
      currentObjectIndex: objects.length,
      selectedObjectIndex: objects.length,
      startPoint: this.getStartPointBundle(event, object),
      mode: meta.editor ? modes.EDIT_OBJECT : modes.SCALE,
      selectedTool: null,
    })
  }

  updatePath(object) {
    let { path } = object
    let diffX = object.x - object.moveX
    let diffY = object.y - object.moveY

    let newPath = path.map(({ x1, y1, x2, y2, x, y }) => ({
      x1: diffX + x1,
      y1: diffY + y1,
      x2: diffX + x2,
      y2: diffY + y2,
      x: diffX + x,
      y: diffY + y,
    }))

    return {
      ...object,
      path: newPath,
      moveX: object.x,
      moveY: object.y,
    }
  }

  updateObject(objectIndex, changes, updatePath) {
    let { objects, onUpdate } = this.props
    onUpdate(
      objects.map((object, index) => {
        if (index === objectIndex) {
          let newObject = {
            ...object,
            ...changes,
          }

          return updatePath ? this.updatePath(newObject) : newObject
        } else {
          // console.log("ID=> ", object.uuid, "CHANGES :", JSON.stringify(changes))
          return object
        }
      })
    )
  }

  getOffset() {
    let parent = this.svgElement.getBoundingClientRect()
    let { canvasWidth, canvasHeight } = this.getCanvas()
    return {
      x: parent.left,
      y: parent.top,
      width: canvasWidth,
      height: canvasHeight,
    }
  }

  applyOffset(bundle) {
    let offset = this.getOffset()
    return {
      ...bundle,
      x: bundle.x - offset.x,
      y: bundle.y - offset.y,
    }
  }

  updateHandler(index, object) {
    let target = this.objectRefs[index]
    let bbox = target.getBoundingClientRect()
    let { canvasOffsetX, canvasOffsetY } = this.getCanvas()

    let handler = {
      ...this.state.handler,
      width: object.width || bbox.width,
      height: object.height || bbox.height,
      top: object.y + canvasOffsetY,
      left: object.x + canvasOffsetX,
      rotate: object.rotate,
    }

    if (!object.width) {
      let offset = this.getOffset()
      handler = {
        ...handler,
        left: bbox.left - offset.x,
        top: bbox.top - offset.y,
      }
    }

    this.setState({
      handler: handler,
    })
  }

  snapCoordinates({ x, y }) {
    let { snapToGrid } = this.props
    return {
      x: x - (x % snapToGrid),
      y: y - (y % snapToGrid),
    }
  }

  getMouseCoords({ clientX, clientY }) {
    let coords = this.applyOffset({
      x: clientX,
      y: clientY,
    })

    return this.snapCoordinates(coords)
  }

  onDrag(event) {
    let { currentObjectIndex, startPoint, mode } = this.state
    let { objects } = this.props
    let object = objects[currentObjectIndex]
    let mouse = this.getMouseCoords(event)

    let map = {
      [modes.SCALE]: scale,
      [modes.ROTATE]: rotate,
      [modes.DRAG]: drag,
    }

    let action = map[mode]

    if (action) {
      let newObject = action({
        object,
        startPoint,
        mouse,
        objectIndex: currentObjectIndex,
        objectRefs: this.objectRefs,
      })

      this.updateObject(currentObjectIndex, newObject)
      this.updateHandler(currentObjectIndex, newObject)
    }

    if (currentObjectIndex !== null) {
      this.detectOverlappedObjects(event)
    }
  }

  detectOverlappedObjects(event) {
    let { currentObjectIndex } = this.state
    let mouse = this.getMouseCoords(event)

    let refs = this.objectRefs,
      keys = Object.keys(this.props.objects),
      offset = this.getOffset()

    let currentRect = refs[currentObjectIndex].getBoundingClientRect()

    keys
      .filter((object, index) => index !== currentObjectIndex)
      .forEach((key) => {
        let rect = refs[key].getBoundingClientRect()
        let { left, top, width, height } = rect

        left -= offset.x
        top -= offset.y

        let isOverlapped =
          mouse.x > left &&
          mouse.x < left + width &&
          mouse.y > top &&
          mouse.y < top + height &&
          currentRect.width > width &&
          currentRect.height > height

        if (isOverlapped) {
          this.showHandler(Number(key))
        }
      })
  }

  stopDrag() {
    let { mode } = this.state

    if (_.includes([modes.DRAG, modes.ROTATE, modes.SCALE], mode)) {
      this.setState({
        mode: modes.FREE,
      })
    }
  }

  showEditor() {
    let { selectedObjectIndex } = this.state

    let { objects } = this.props,
      currentObject = objects[selectedObjectIndex],
      objectComponent = this.getObjectComponent(currentObject.type)

    if (objectComponent.meta.editor) {
      this.setState({
        mode: modes.EDIT_OBJECT,
        showHandler: false,
      })
    }
  }

  getObjectComponent(type) {
    let { objectTypes } = this.props
    return objectTypes[type]
  }

  getCanvas() {
    let { width, height } = this.props
    let { canvasWidth = width, canvasHeight = height } = this.props
    return {
      width,
      height,
      canvasWidth,
      canvasHeight,
      canvasOffsetX: (canvasWidth - width) / 2,
      canvasOffsetY: (canvasHeight - height) / 2,
    }
  }

  renderSVG() {
    let canvas = this.getCanvas()
    let { width, height } = canvas
    let { background, objects, objectTypes } = this.props

    return (
      <SVGRenderer
        background={background}
        width={width}
        canvas={canvas}
        height={height}
        objects={objects}
        onMouseOver={this.showHandler.bind(this)}
        objectTypes={objectTypes}
        objectRefs={this.objectRefs}
        onRender={(ref) => (this.svgElement = ref)}
        onMouseDown={this.newObject.bind(this)}
      />
    )
  }

  selectTool(tool) {
    this.setState({
      selectedTool: tool,
      mode: modes.DRAW,
      currentObjectIndex: null,
      showHandler: false,
      handler: null,
    })
  }

  updateObjectProp(key, value) {
    let { selectedObjectIndex } = this.state

    this.updateObject(selectedObjectIndex, {
      [key]: value,
    })
  }

  handleObjectChange(key, value) {
    if (key === 'xlinkHref') {
      this.props.onImageDrop(value).then((href) => {
        this.updateObjectProp(key, href)
      })
    } else {
      this.updateObjectProp(key, value)
    }
  }

  handleArrange(arrange) {
    let { selectedObjectIndex } = this.state
    let { objects } = this.props
    let object = objects[selectedObjectIndex]

    let arrangers = {
      front: (rest, object) => [[...rest, object], rest.length],
      back: (rest, object) => [[object, ...rest], 0],
    }

    let rest = objects.filter((object, index) => selectedObjectIndex !== index)

    this.setState(
      {
        selectedObjectIndex: null,
      },
      () => {
        let arranger = arrangers[arrange]
        let [arranged, newIndex] = arranger(rest, object)
        this.props.onUpdate(arranged)
        this.setState({
          selectedObjectIndex: newIndex,
        })
      }
    )
  }

  removeCurrent() {
    let { selectedObjectIndex } = this.state
    let { objects } = this.props

    let rest = objects.filter((object, index) => selectedObjectIndex !== index)

    this.setState(
      {
        currentObjectIndex: null,
        selectedObjectIndex: null,
        showHandler: false,
        handler: null,
      },
      () => {
        this.objectRefs = {}
        this.props.onUpdate(rest)
      }
    )
  }

  moveSelectedObject(attr, points, key) {
    let { selectedObjectIndex } = this.state
    let { objects } = this.props
    let object = objects[selectedObjectIndex]

    if (key.startsWith('shift')) {
      points *= 10
    }

    let changes = {
      ...object,
      [attr]: object[attr] + points,
    }

    this.updateObject(selectedObjectIndex, changes)
    this.updateHandler(selectedObjectIndex, changes)
  }

  getKeymapHandlers() {
    let handlers = {
      removeObject: this.removeCurrent.bind(this),
      moveLeft: this.moveSelectedObject.bind(this, 'x', -1),
      moveRight: this.moveSelectedObject.bind(this, 'x', 1),
      moveUp: this.moveSelectedObject.bind(this, 'y', -1),
      moveDown: this.moveSelectedObject.bind(this, 'y', 1),
      closePath: () => this.setState({ mode: modes.FREE }),
    }

    return _.mapValues(handlers, (handler) => (event, key) => {
      if (event.target.tagName !== 'INPUT') {
        event.preventDefault()
        handler(event, key)
      }
    })
  }

  render() {
    let {
      showHandler,
      handler,
      mode,
      selectedObjectIndex,
      selectedTool,
    } = this.state

    let { objects, objectTypes, insertMenu: InsertMenuComponent } = this.props

    let currentObject = objects[selectedObjectIndex]
    let isEditMode = mode === modes.EDIT_OBJECT
    let showPropertyPanel = selectedObjectIndex !== null

    let { width, height } = this.getCanvas()

    let objectComponent, objectWithInitial, ObjectEditor
    if (currentObject) {
      objectComponent = this.getObjectComponent(currentObject.type)
      objectWithInitial = {
        ...objectComponent.meta.initial,
        ...currentObject,
      }
      ObjectEditor = objectComponent.meta.editor
    }

    return (
      <HotKeys
        keyMap={this.keyMap}
        style={styles.keyboardManager}
        handlers={this.getKeymapHandlers()}
      >
        <div
          className={'container'}
          style={{
            ...styles.container,
            ...this.props.style,
            padding: 0,
          }}
          onMouseMove={this.onDrag.bind(this)}
          onMouseUp={this.stopDrag.bind(this)}
        >
          {/* Left Panel: Displays insertion tools (shapes, images, etc.) */}
          {InsertMenuComponent && (
            <InsertMenuComponent
              tools={objectTypes}
              currentTool={selectedTool}
              onSelect={this.selectTool.bind(this)}
            />
          )}

          {/* Center Panel: Displays the preview */}
          <div style={styles.canvasContainer}>
            {isEditMode && ObjectEditor && (
              <ObjectEditor
                object={currentObject}
                offset={this.getOffset()}
                onUpdate={(object) =>
                  this.updateObject(selectedObjectIndex, object)
                }
                onClose={() => this.setState({ mode: modes.FREE })}
                width={width}
                height={height}
              />
            )}

            {showHandler && (
              <Handler
                boundingBox={handler}
                canResize={
                  _(currentObject).has('width') ||
                  _(currentObject).has('height')
                }
                canRotate={_(currentObject).has('rotate')}
                onMouseLeave={this.hideHandler.bind(this)}
                onDoubleClick={this.showEditor.bind(this)}
                onDrag={this.startDrag.bind(this, modes.DRAG)}
                onResize={this.startDrag.bind(this, modes.SCALE)}
                onRotate={this.startDrag.bind(this, modes.ROTATE)}
              />
            )}

            {this.renderSVG()}
          </div>

          {/* Right Panel: Displays text, styling and sizing tools */}
          {showPropertyPanel && (
            <PanelList
              id={this.props.id}
              object={objectWithInitial}
              onArrange={this.handleArrange.bind(this)}
              onChange={this.handleObjectChange.bind(this)}
              objectComponent={objectComponent}
            />
          )}
        </div>
      </HotKeys>
    )
  }
}

export const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  canvasContainer: {
    position: 'relative',
  },
  keyboardManager: {
    outline: 'none',
  },
}

export default Designer
