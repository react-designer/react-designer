'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ScaleAnchor(props) {
  var boundingBox = props.boundingBox;

  var style = {
    marginTop: boundingBox.height - 4,
    marginLeft: boundingBox.width - 4
  };
  return _react2.default.createElement('div', { style: [styles.anchor, styles.scaleAnchor, style],
    className: 'resize-anchor',
    onMouseDown: props.onMouseDown });
};

ScaleAnchor = (0, _radium2.default)(ScaleAnchor);

function RotateAnchor(props) {
  var style = {
    marginLeft: props.boundingBox.width - 3
  };
  return _react2.default.createElement('div', { style: [styles.anchor, styles.rotateAnchor, style],
    className: 'rotate-anchor',
    onMouseDown: props.onMouseDown });
};

RotateAnchor = (0, _radium2.default)(RotateAnchor);

var Handler = (function (_Component) {
  _inherits(Handler, _Component);

  function Handler() {
    _classCallCheck(this, Handler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Handler).apply(this, arguments));
  }

  _createClass(Handler, [{
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // event.preventDefault();

      if (event.target.classList.contains('handler')) {
        this.props.onDrag(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var boundingBox = props.boundingBox;

      var handlerStyle = _extends({}, styles.handler, boundingBox, {
        left: boundingBox.left - 2,
        top: boundingBox.top - 2,
        transform: 'rotate(' + boundingBox.rotate + 'deg)'
      });

      return _react2.default.createElement(
        'div',
        { className: 'handler',
          style: handlerStyle,
          onMouseLeave: props.onMouseLeave,
          onDoubleClick: props.onDoubleClick,
          onMouseDown: this.onMouseDown.bind(this) },
        props.canRotate && _react2.default.createElement(RotateAnchor, { onMouseDown: props.onRotate,
          boundingBox: boundingBox }),
        props.canResize && _react2.default.createElement(ScaleAnchor, { onMouseDown: props.onResize,
          boundingBox: boundingBox })
      );
    }
  }]);

  return Handler;
})(_react.Component);

var styles = {
  handler: {
    'position': 'absolute',
    'border': '2px solid #dedede',
    'zIndex': 999999
  },
  anchor: {
    'width': 10,
    'height': 10,
    ':hover': {
      'borderColor': 'gray'
    }
  },
  scaleAnchor: {
    'marginTop': -3,
    'borderRight': '2px solid #dedede',
    'borderBottom': '2px solid #dedede',
    'position': 'absolute',
    'zIndex': -1
  },
  rotateAnchor: {
    'marginTop': -8,
    'borderRight': '2px solid #dedede',
    'borderTop': '2px solid #dedede',
    'position': 'absolute',
    'borderTopRightRadius': 3,
    'zIndex': -1
  }
};

exports.default = Handler;