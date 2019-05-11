import React, {Component} from 'react';
import SVGRenderer from './SVGRenderer';

import {Text, Path, Rect, Circle, Image} from './objects';

class Preview extends Component {
  static defaultProps = {
    objectTypes: {
      'text': Text,
      'rectangle': Rect,
      'circle': Circle,
      'polygon': Path,
      'image': Image
    }
  };

  componentWillMount() {
    this.objectRefs = {};
  }

  render() {
    let {width, height, objects, objectTypes, responsive = false} = this.props;

    let style = {
      ...styles.container,
      ...this.props.style,
      width: responsive ? '100%' : width,
      height: responsive ? '100%' : height,
      padding: 0
   };

   let canvas = {
      width: responsive ? '100%' : width,
      height: responsive ? '100%' : height,
      canvasWidth: responsive ? '100%' : width,
      canvasHeight: responsive ? '100%' : height
   };

   if (responsive) {
     objects = objects.map(object => ({
       ...object,
       width: (object.width / width) * 100 + '%',
       height: (object.height / height) * 100 + '%',
       x: (object.x / width)*100 + '%',
       y: (object.y / height)*100 + '%',
     }))
   }

    return (
      <div className={'container'} style={style}>
        <SVGRenderer
          width={width}
          height={height}
          objects={objects}
          objectRefs={this.objectRefs}
          objectTypes={objectTypes}
          onRender={(ref) => this.svgElement = ref}
          canvas={canvas} />
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative"
  }
};

export default Preview;
