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

var _SVGRenderer = require('./SVGRenderer');

var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);

var _objects = require('./objects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = (function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Preview).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.objectRefs = {};
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var width = _props.width;
      var height = _props.height;
      var objects = _props.objects;
      var objectTypes = _props.objectTypes;

      var style = _extends({}, styles.container, this.props.style, {
        width: width,
        height: height
      });

      var canvas = {
        width: width,
        height: height,
        canvasWidth: width,
        canvasHeight: height
      };

      return _react2.default.createElement(
        'div',
        { className: 'container', style: style },
        _react2.default.createElement(_SVGRenderer2.default, {
          width: width,
          height: height,
          objects: objects,
          objectRefs: this.objectRefs,
          objectTypes: objectTypes,
          canvas: canvas })
      );
    }
  }]);

  return Preview;
})(_react.Component);

Preview.defaultProps = {
  objectTypes: {
    'text': _objects.Text,
    'rectangle': _objects.Rect,
    'circle': _objects.Circle,
    'polygon': _objects.Path
  }
};

var styles = {
  container: {
    position: "relative"
  }
};

exports.default = (0, _radium2.default)(Preview);