'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Panel2 = require('./Panel');

var _Panel3 = _interopRequireDefault(_Panel2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _PropertyGroup = require('./PropertyGroup');

var _PropertyGroup2 = _interopRequireDefault(_PropertyGroup);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _SwitchState = require('./SwitchState');

var _SwitchState2 = _interopRequireDefault(_SwitchState);

var _Columns = require('./Columns');

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _ColorInput = require('./ColorInput');

var _ColorInput2 = _interopRequireDefault(_ColorInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StylePanel = (function (_Panel) {
  _inherits(StylePanel, _Panel);

  function StylePanel() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, StylePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(StylePanel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.modes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StylePanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var object = this.props.object;

      return _react2.default.createElement(
        _PropertyGroup2.default,
        null,
        _react2.default.createElement(
          _Columns2.default,
          { label: 'Fill' },
          _react2.default.createElement(
            _Column2.default,
            null,
            _react2.default.createElement(_ColorInput2.default, { value: object.fill,
              onChange: this.props.onChange.bind(this, 'fill') })
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: 'Stroke' },
          _react2.default.createElement(
            _Column2.default,
            null,
            _react2.default.createElement(_ColorInput2.default, { value: object.stroke,
              onChange: this.props.onChange.bind(this, 'stroke') })
          ),
          _react2.default.createElement(
            _Column2.default,
            { label: 'width' },
            _react2.default.createElement('input', { style: [[_styles2.default.input, _styles2.default.integerInput], { width: 30 }],
              onChange: function onChange(e) {
                return _this2.props.onChange('strokeWidth', e.target.value);
              },
              value: object.strokeWidth })
          ),
          _react2.default.createElement(
            _Column2.default,
            { showIf: _lodash2.default.has(object, 'radius'), label: 'radius' },
            _react2.default.createElement('input', { style: [_styles2.default.input, _styles2.default.integerInput, { width: 30 }],
              onChange: function onChange(e) {
                return _this2.props.onChange('radius', e.target.value);
              },
              value: object.radius })
          )
        ),
        _react2.default.createElement(
          _Columns2.default,
          { label: 'Blending' },
          _react2.default.createElement(
            _Column2.default,
            null,
            _react2.default.createElement(
              'select',
              { style: _styles2.default.select,
                value: object.blendMode,
                onChange: function onChange(e) {
                  return _this2.props.onChange('blendMode', e.target.value);
                } },
              this.modes.map(function (mode) {
                return _react2.default.createElement(
                  'option',
                  { key: mode, value: mode },
                  mode
                );
              })
            )
          )
        )
      );
    }
  }]);

  return StylePanel;
})(_Panel3.default);

exports.default = StylePanel;