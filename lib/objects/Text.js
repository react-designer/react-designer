'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../constants');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Vector2 = require('./Vector');

var _Vector3 = _interopRequireDefault(_Vector2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = (function (_Vector) {
  _inherits(Text, _Vector);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'getStyle',
    value: function getStyle() {
      var object = this.props.object;

      return _extends({}, _get(Object.getPrototypeOf(Text.prototype), 'getStyle', this).call(this), {
        dominantBaseline: "central",
        fontWeight: object.fontWeight,
        fontStyle: object.fontStyle,
        textDecoration: object.textDecoration,
        mixBlendMode: object.blendMode,
        WebkitUserSelect: "none"
      });
    }
  }, {
    key: 'getTransformMatrix',
    value: function getTransformMatrix(_ref) {
      var rotate = _ref.rotate;
      var x = _ref.x;
      var y = _ref.y;

      return 'rotate(' + rotate + ' ' + x + ' ' + y + ')';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var object = _props.object;
      var index = _props.index;

      return _react2.default.createElement(
        'text',
        _extends({ style: this.getStyle()
        }, this.getObjectAttributes(), {
          textAnchor: 'middle',
          fontSize: object.fontSize,
          fontFamily: object.fontFamily }),
        object.text
      );
    }
  }]);

  return Text;
})(_Vector3.default);

Text.meta = {
  icon: _react2.default.createElement(_Icon2.default, { icon: 'text', size: 30 }),
  initial: {
    text: "Hello",
    rotate: 0,
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    fill: "black",
    fontSize: 50,
    fontFamily: "Helvetica"
  }
};
exports.default = Text;