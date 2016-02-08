'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGRenderer = (function (_Component) {
  _inherits(SVGRenderer, _Component);

  function SVGRenderer() {
    _classCallCheck(this, SVGRenderer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SVGRenderer).apply(this, arguments));
  }

  _createClass(SVGRenderer, [{
    key: 'getObjectComponent',
    value: function getObjectComponent(type) {
      var objectTypes = this.props.objectTypes;

      return objectTypes[type];
    }
  }, {
    key: 'renderObject',
    value: function renderObject(object, index) {
      var _props = this.props;
      var objectRefs = _props.objectRefs;
      var onMouseOver = _props.onMouseOver;

      var Renderer = this.getObjectComponent(object.type);
      return _react2.default.createElement(Renderer, { onRender: function onRender(ref) {
          return objectRefs[index] = ref;
        },
        onMouseOver: onMouseOver.bind(this, index),
        object: object, key: index, index: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var background = _props2.background;
      var objects = _props2.objects;
      var svgStyle = _props2.svgStyle;
      var canvas = _props2.canvas;
      var onMouseDown = _props2.onMouseDown;
      var onRender = _props2.onRender;
      var width = canvas.width;
      var height = canvas.height;
      var canvasOffsetX = canvas.canvasOffsetX;
      var canvasOffsetY = canvas.canvasOffsetY;

      var style = [styles.canvas, background ? {
        backgroundColor: background
      } : styles.grid, _extends({}, svgStyle, {
        marginTop: canvasOffsetY,
        marginLeft: canvasOffsetX
      })];

      return _react2.default.createElement(
        'svg',
        { onMouseDown: onMouseDown,
          ref: onRender,
          width: width,
          height: height,
          style: style },
        objects.map(this.renderObject.bind(this))
      );
    }
  }]);

  return SVGRenderer;
})(_react.Component);

SVGRenderer.defaultProps = {
  onMouseOver: function onMouseOver() {}
};
var styles = exports.styles = {
  canvas: {
    backgroundSize: 400
  },
  grid: {
    backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5' + 'vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0' + 'PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9I' + 'iNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIG' + 'ZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
    backgroundSize: "auto"
  }
};

exports.default = (0, _radium2.default)(SVGRenderer);