'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactColor = require('react-color');

var _reactColor2 = _interopRequireDefault(_reactColor);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorInput = (function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ColorInput)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      show: false,
      x: 0,
      y: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorInput, [{
    key: 'toggleVisibility',
    value: function toggleVisibility(event) {
      if (event.preventDefault) {
        event.preventDefault();
        var rect = event.target.getBoundingClientRect();
        this.setState({
          x: rect.left,
          y: rect.top
        });
      }

      var show = this.state.show;

      this.setState({
        show: !show
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(color) {
      var _color$rgb = color.rgb;
      var r = _color$rgb.r;
      var g = _color$rgb.g;
      var b = _color$rgb.b;
      var a = _color$rgb.a;

      this.props.onChange('rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')');
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var show = _state.show;
      var x = _state.x;
      var y = _state.y;
      var value = this.props.value;

      var position = {
        position: "fixed",
        left: x + 3,
        top: y - 2
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactColor2.default, {
          color: value,
          display: show,
          positionCSS: position,
          onChange: this.handleChange.bind(this),
          onClose: this.toggleVisibility.bind(this),
          type: 'chrome' }),
        _react2.default.createElement(
          'a',
          { href: '#',
            style: _styles2.default.colorInput,
            onClick: this.toggleVisibility.bind(this) },
          _react2.default.createElement('span', { style: [_styles2.default.color, { backgroundColor: value }] })
        )
      );
    }
  }]);

  return ColorInput;
})(_react.Component);

exports.default = (0, _radium2.default)(ColorInput);