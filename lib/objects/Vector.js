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

var _panels = require('../panels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vector = (function (_Component) {
  _inherits(Vector, _Component);

  function Vector() {
    _classCallCheck(this, Vector);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Vector).apply(this, arguments));
  }

  _createClass(Vector, [{
    key: 'getStyle',
    value: function getStyle() {
      var object = this.props.object;

      return {
        mixBlendMode: object.blendMode
      };
    }
  }, {
    key: 'getTransformMatrix',
    value: function getTransformMatrix(_ref) {
      var rotate = _ref.rotate;
      var x = _ref.x;
      var y = _ref.y;
      var width = _ref.width;
      var height = _ref.height;

      if (rotate) {
        var centerX = width / 2 + x;
        var centerY = height / 2 + y;
        return 'rotate(' + rotate + ' ' + centerX + ' ' + centerY + ')';
      }
    }
  }, {
    key: 'getObjectAttributes',
    value: function getObjectAttributes() {
      var _props = this.props;
      var object = _props.object;
      var onRender = _props.onRender;

      var rest = _objectWithoutProperties(_props, ['object', 'onRender']);

      return _extends({}, object, {
        transform: this.getTransformMatrix(object),
        ref: onRender
      }, rest);
    }
  }]);

  return Vector;
})(_react.Component);

Vector.panels = [_panels.SizePanel, _panels.TextPanel, _panels.StylePanel, _panels.ArrangePanel];
exports.default = Vector;