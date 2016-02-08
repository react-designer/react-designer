'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var Rect = (function (_Vector) {
  _inherits(Rect, _Vector);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rect).apply(this, arguments));
  }

  _createClass(Rect, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var object = _props.object;
      var index = _props.index;

      return _react2.default.createElement('rect', _extends({ style: this.getStyle()
      }, this.getObjectAttributes(), {
        rx: object.radius,
        width: object.width,
        height: object.height }));
    }
  }]);

  return Rect;
})(_Vector3.default);

Rect.meta = {
  icon: _react2.default.createElement(_Icon2.default, { icon: 'rectangle', size: 30 }),
  initial: {
    width: 5,
    height: 5,
    strokeWidth: 0,
    fill: "blue",
    radius: 0,
    blendMode: "normal",
    rotate: 0
  }
};
exports.default = Rect;