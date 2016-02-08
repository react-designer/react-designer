'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextPanel = (function (_Panel) {
  _inherits(TextPanel, _Panel);

  function TextPanel() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TextPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TextPanel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.fontFamilies = [['Helvetica', 'Helvetica, Arial, sans-serif'], ['Helvetica Neue', '"Helvetica Neue", Arial, sans-serif'], ['Georgia', 'Georgia, serif'], ['American Typewriter', 'AmericanTypewriter, Georgia, serif'], ['Monaco', 'Monaco, consolas, monospace']], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var object = this.props.object;

      return _react2.default.createElement(
        _PropertyGroup2.default,
        { showIf: _lodash2.default.has(object, 'text') },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.columns },
          _react2.default.createElement(
            _Column2.default,
            { style: { marginRight: 15 } },
            _lodash2.default.has(object, 'fontWeight') && _react2.default.createElement(_SwitchState2.default, { icon: 'format-bold',
              defaultValue: 'normal',
              nextState: 'bold',
              value: object.fontWeight,
              onChange: this.props.onChange.bind(this, 'fontWeight') }),
            _lodash2.default.has(object, 'fontStyle') && _react2.default.createElement(_SwitchState2.default, { icon: 'format-italic',
              defaultValue: 'normal',
              nextState: 'italic',
              value: object.fontStyle,
              onChange: this.props.onChange.bind(this, 'fontStyle') }),
            _lodash2.default.has(object, 'textDecoration') && _react2.default.createElement(_SwitchState2.default, { icon: 'format-underline',
              defaultValue: 'none',
              nextState: 'underline',
              value: object.textDecoration,
              onChange: this.props.onChange.bind(this, 'textDecoration') })
          ),
          _react2.default.createElement(
            _Column2.default,
            { style: { "float": "left" } },
            _lodash2.default.has(object, 'fontSize') && _react2.default.createElement('input', { style: [_styles2.default.input, _styles2.default.integerInput, { width: 35 }],
              value: object.fontSize,
              onChange: function onChange(e) {
                return _this2.props.onChange('fontSize', e.target.value);
              } })
          ),
          _react2.default.createElement(
            _Column2.default,
            { style: { "float": "right", marginRight: 10 } },
            _react2.default.createElement(
              'select',
              { style: _styles2.default.select,
                value: object.fontFamily,
                onChange: function onChange(e) {
                  return _this2.props.onChange('fontFamily', e.target.value);
                } },
              this.fontFamilies.map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2);

                var name = _ref2[0];
                var value = _ref2[1];
                return _react2.default.createElement(
                  'option',
                  { key: value, value: value },
                  name
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: [_styles2.default.row, { paddingTop: 25, paddingRight: 10 }] },
            _react2.default.createElement('input', { style: [_styles2.default.input, _styles2.default.textInput],
              onChange: function onChange(e) {
                return _this2.props.onChange('text', e.target.value);
              },
              value: object.text })
          )
        )
      );
    }
  }]);

  return TextPanel;
})(_Panel3.default);

exports.default = TextPanel;