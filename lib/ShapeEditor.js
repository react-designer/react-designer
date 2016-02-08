'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShapeEditor = (function (_Component) {
  _inherits(ShapeEditor, _Component);

  function ShapeEditor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ShapeEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ShapeEditor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      mode: 'source'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShapeEditor, [{
    key: 'getMouseCoords',
    value: function getMouseCoords(event) {
      var _props = this.props;
      var object = _props.object;
      var offset = _props.offset;

      return {
        x: event.clientX - offset.x - (object.x - object.moveX),
        y: event.clientY - offset.y - (object.y - object.moveY)
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount(props) {
      var object = this.props.object;

      if (!object.path.length) {
        this.props.onUpdate({
          path: [{ x1: object.x, y1: object.y }],
          moveX: object.x,
          moveY: object.y
        });
      } else {
        this.setState({
          mode: 'edit'
        });
      }
    }
  }, {
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      var path = this.props.object.path;

      return path[path.length - 1];
    }
  }, {
    key: 'updatePath',
    value: function updatePath(updates, index) {
      var path = this.props.object.path;

      var current = path[index];

      this.props.onUpdate({
        path: [].concat(_toConsumableArray(path.slice(0, index)), [_extends({}, current, updates)], _toConsumableArray(path.slice(index + 1)))
      });
    }
  }, {
    key: 'updateCurrentPath',
    value: function updateCurrentPath(updates) {
      var close = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var path = this.props.object.path;

      var current = this.getCurrentPath();
      this.props.onUpdate({
        closed: close,
        path: [].concat(_toConsumableArray(path.slice(0, path.length - 1)), [_extends({}, current, updates)])
      });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var mode = this.state.mode;

      var currentPath = this.getCurrentPath();
      var mouse = this.getMouseCoords(event);
      var object = this.props.object;
      var moveX = object.moveX;
      var moveY = object.moveY;
      var x = mouse.x;
      var y = mouse.y;

      var snapToInitialVertex = this.isCollides(moveX, moveY, x, y);

      if (snapToInitialVertex) {
        x = moveX;
        y = moveY;
      }

      if (mode === 'source') {
        this.updateCurrentPath({
          x1: mouse.x,
          y1: mouse.y
        });
      }

      if (mode === 'target') {
        this.updateCurrentPath({
          x2: x,
          y2: y,
          x: x,
          y: y
        });
      }

      if (mode === 'connect') {
        this.updateCurrentPath({ x: x, y: y });
      }

      if (mode === 'target' || mode === 'connect') {
        this.setState({
          closePath: snapToInitialVertex
        });
      }

      if (mode === 'move') {
        var _updatePath;

        var _state = this.state;
        var movedPathIndex = _state.movedPathIndex;
        var movedTargetX = _state.movedTargetX;
        var movedTargetY = _state.movedTargetY;

        this.updatePath((_updatePath = {}, _defineProperty(_updatePath, movedTargetX, x), _defineProperty(_updatePath, movedTargetY, y), _updatePath), movedPathIndex);
      }

      if (mode === 'moveInitial') {
        this.props.onUpdate({
          moveX: x,
          moveY: y
        });
      }
    }
  }, {
    key: 'isCollides',
    value: function isCollides(x1, y1, x2, y2) {
      var radius = arguments.length <= 4 || arguments[4] === undefined ? 5 : arguments[4];

      var xd = x1 - x2;
      var yd = y1 - y2;
      var wt = radius * 2;
      return xd * xd + yd * yd <= wt * wt;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (this.state.closePath) {
        return this.closePath();
      }

      if (event.target.tagName === 'svg') {
        return this.props.onClose();
      }

      var mode = this.state.mode;

      if (mode === 'target') {
        this.setState({
          mode: 'connect'
        });
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      var mode = this.state.mode;
      var path = this.props.object.path;

      var mouse = this.getMouseCoords(event);
      var currentPath = this.getCurrentPath();

      if (this.state.closePath) {
        return this.closePath();
      }

      if (mode === 'source') {
        this.setState({
          mode: 'target'
        });
      }

      if (mode === 'connect') {
        this.setState({
          mode: 'target'
        });
        this.props.onUpdate({
          path: [].concat(_toConsumableArray(path), [{
            x1: currentPath.x + (currentPath.x - currentPath.x2),
            y1: currentPath.y + (currentPath.y - currentPath.y2),
            x2: mouse.x,
            y2: mouse.y,
            x: mouse.x,
            y: mouse.y
          }])
        });
      }

      if (mode === 'move' || mode === 'moveInitial') {
        this.setState({
          mode: 'edit'
        });
      }
    }
  }, {
    key: 'getCurrentPoint',
    value: function getCurrentPoint(pathIndex) {
      var state = this.state;
      var object = this.props.object;

      if (pathIndex === 0) {
        return { x: object.moveX, y: object.moveY };
      } else {
        var path = state.path[pathIndex - 1];
        return { x: path.x, y: path.y };
      }
    }
  }, {
    key: 'closePath',
    value: function closePath() {
      this.setState({
        mode: null
      });

      this.props.onClose();

      this.updateCurrentPath({
        x: this.props.object.moveX,
        y: this.props.object.moveY
      }, true);
    }
  }, {
    key: 'moveVertex',
    value: function moveVertex(pathIndex, targetX, targetY, event) {
      event.preventDefault();

      if (this.state.mode !== 'edit') {
        return;
      }

      var mouse = this.getMouseCoords(event);

      this.setState({
        mode: 'move',
        movedPathIndex: pathIndex,
        movedTargetX: targetX,
        movedTargetY: targetY
      });
    }
  }, {
    key: 'moveInitialVertex',
    value: function moveInitialVertex(event) {
      this.setState({
        mode: 'moveInitial'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var object = _props2.object;
      var width = _props2.width;
      var height = _props2.height;
      var path = object.path;
      var state = this.state;
      var moveX = object.moveX;
      var moveY = object.moveY;
      var x = object.x;
      var y = object.y;

      var offsetX = x - moveX,
          offsetY = y - moveY;

      return _react2.default.createElement(
        'div',
        { style: styles.canvas,
          onMouseUp: this.onMouseUp.bind(this),
          onMouseMove: this.onMouseMove.bind(this),
          onMouseDown: this.onMouseDown.bind(this) },
        _react2.default.createElement(
          'svg',
          { style: { width: width, height: height } },
          _react2.default.createElement(
            'g',
            { transform: 'translate(' + offsetX + ' ' + offsetY + ') \n                         rotate(' + object.rotate + ' ' + object.x + ' ' + object.y + ')' },
            object.path.map(function (_ref, i) {
              var x1 = _ref.x1;
              var y1 = _ref.y1;
              var x2 = _ref.x2;
              var y2 = _ref.y2;
              var x = _ref.x;
              var y = _ref.y;
              return _react2.default.createElement(
                'g',
                { key: i },
                x2 && y2 && _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement('line', { x1: x2, y1: y2,
                    x2: x, y2: y,
                    style: styles.edge,
                    onMouseDown: _this2.moveVertex.bind(_this2, i, 'x', 'y') }),
                  _react2.default.createElement('circle', { r: 4, cx: x2, cy: y2,
                    style: styles.vertex,
                    onMouseDown: _this2.moveVertex.bind(_this2, i, 'x2', 'y2') }),
                  _react2.default.createElement('circle', { r: 4, cx: x, cy: y,
                    style: styles.vertex,
                    onMouseDown: _this2.moveVertex.bind(_this2, i, 'x', 'y') })
                ),
                i === 0 && _react2.default.createElement(
                  'g',
                  null,
                  _react2.default.createElement('line', { x1: moveX, y1: moveY,
                    style: styles.edge,
                    onMouseDown: _this2.moveVertex.bind(_this2, i, 'x1', 'y1'),
                    x2: x1, y2: y1, stroke: 'black' }),
                  _react2.default.createElement('circle', { style: styles.vertex, r: 4, cx: x1, cy: y1,
                    onMouseDown: _this2.moveVertex.bind(_this2, i, 'x1', 'y1') }),
                  _react2.default.createElement('circle', { r: 4, cx: moveX, cy: moveY,
                    style: [styles.vertex, styles.initialVertex] })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return ShapeEditor;
})(_react.Component);

var styles = {
  vertex: {
    fill: "#3381ff",
    strokeWidth: 0
  },
  initialVertex: {
    fill: "#ffd760"
  },
  edge: {
    stroke: "#b9b9b9"
  },
  canvas: {
    position: "absolute"
  }
};

exports.default = (0, _radium2.default)(ShapeEditor);