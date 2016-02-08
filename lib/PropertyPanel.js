'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrangePanel = exports.StylePanel = exports.TextPanel = exports.SizePanel = exports.Panel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactColor = require('react-color');

var _reactColor2 = _interopRequireDefault(_reactColor);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var onClick = _ref.onClick;

  var props = _objectWithoutProperties(_ref, ['onClick']);

  var _onClick = function _onClick(e) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    e.preventDefault();
    onClick.apply(undefined, args);
  };
  return _react2.default.createElement(
    'a',
    { href: '#', style: styles.button, onClick: _onClick },
    props.children
  );
};

Button = (0, _radium2.default)(Button);

var Column = function Column(_ref2) {
  var _ref2$showIf = _ref2.showIf;
  var showIf = _ref2$showIf === undefined ? true : _ref2$showIf;

  var props = _objectWithoutProperties(_ref2, ['showIf']);

  if (!showIf) {
    return _react2.default.createElement('div', { style: styles.empty });
  }

  return _react2.default.createElement(
    'div',
    { style: [styles.column, props.style] },
    props.children || _react2.default.createElement('input', { style: [styles.input, styles.integerInput], value: props.value,
      onChange: function onChange(e) {
        return props.onChange(e.target.value);
      } }),
    props.label && _react2.default.createElement(
      'div',
      { style: styles.inputHelper },
      props.label
    )
  );
};

Column = (0, _radium2.default)(Column);

var Columns = function Columns(_ref3) {
  var _ref3$showIf = _ref3.showIf;
  var showIf = _ref3$showIf === undefined ? true : _ref3$showIf;

  var props = _objectWithoutProperties(_ref3, ['showIf']);

  if (!showIf) {
    return _react2.default.createElement('div', { style: styles.empty });
  }
  return _react2.default.createElement(
    'div',
    { style: styles.columns },
    _react2.default.createElement(
      'div',
      { style: styles.panelTitle },
      props.label
    ),
    props.children
  );
};

Columns = (0, _radium2.default)(Columns);

var PropertyGroup = function PropertyGroup(_ref4) {
  var _ref4$showIf = _ref4.showIf;
  var showIf = _ref4$showIf === undefined ? true : _ref4$showIf;

  var props = _objectWithoutProperties(_ref4, ['showIf']);

  if (!showIf) {
    return _react2.default.createElement('div', { style: styles.empty });
  }
  return _react2.default.createElement(
    'div',
    { style: styles.propertyGroup },
    props.children
  );
};

PropertyGroup = (0, _radium2.default)(PropertyGroup);

var ColorInput = (function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorInput);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
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
            style: styles.colorInput,
            onClick: this.toggleVisibility.bind(this) },
          _react2.default.createElement('span', { style: [styles.color, { backgroundColor: value }] })
        )
      );
    }
  }]);

  return ColorInput;
})(_react.Component);

ColorInput = (0, _radium2.default)(ColorInput);

var SwitchState = function SwitchState(props) {
  var selected = props.value !== props.defaultValue;
  var newValue = selected ? props.defaultValue : props.nextState;
  return _react2.default.createElement(_Icon2.default, { icon: props.icon, active: selected,
    onClick: function onClick() {
      return props.onChange(newValue);
    } });
};

SwitchState = (0, _radium2.default)(SwitchState);

var Panel = exports.Panel = (0, _radium2.default)(_react.Component);

var SizePanel = exports.SizePanel = (function (_Panel) {
  _inherits(SizePanel, _Panel);

  function SizePanel() {
    _classCallCheck(this, SizePanel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SizePanel).apply(this, arguments));
  }

  _createClass(SizePanel, [{
    key: 'render',
    value: function render() {
      var object = this.props.object;

      return _react2.default.createElement(
        PropertyGroup,
        { object: object },
        _lodash2.default.has(object, 'width', 'height') && _react2.default.createElement(
          Columns,
          { label: 'Size' },
          _react2.default.createElement(Column, { showIf: _lodash2.default.has(object, 'width'),
            label: 'width', value: object.width,
            onChange: this.props.onChange.bind(this, 'width') }),
          _react2.default.createElement(Column, { showIf: _lodash2.default.has(object, 'height'), label: 'height',
            value: object.height,
            onChange: this.props.onChange.bind(this, 'height') })
        ),
        _react2.default.createElement(
          Columns,
          { label: 'Position' },
          _react2.default.createElement(Column, { showIf: _lodash2.default.has(object, 'x'),
            label: 'top', value: object.x,
            onChange: this.props.onChange.bind(this, 'x') }),
          _react2.default.createElement(Column, { showIf: _lodash2.default.has(object, 'y'), label: 'top', value: object.y,
            onChange: this.props.onChange.bind(this, 'y') })
        ),
        _lodash2.default.has(object, 'rotate') && _react2.default.createElement(
          Columns,
          { label: 'Rotation' },
          _react2.default.createElement(Column, { label: 'angle', value: object.rotate,
            onChange: this.props.onChange.bind(this, 'rotate') })
        )
      );
    }
  }]);

  return SizePanel;
})(Panel);

var TextPanel = exports.TextPanel = (function (_Panel2) {
  _inherits(TextPanel, _Panel2);

  function TextPanel() {
    var _Object$getPrototypeO2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, TextPanel);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(TextPanel)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.fontFamilies = [['Helvetica', 'Helvetica, Arial, sans-serif'], ['Helvetica Neue', '"Helvetica Neue", Arial, sans-serif'], ['Georgia', 'Georgia, serif'], ['American Typewriter', 'AmericanTypewriter, Georgia, serif'], ['Monaco', 'Monaco, consolas, monospace']], _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(TextPanel, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var object = this.props.object;

      return _react2.default.createElement(
        PropertyGroup,
        { showIf: _lodash2.default.has(object, 'text') },
        _react2.default.createElement(
          'div',
          { style: styles.columns },
          _react2.default.createElement(
            Column,
            { style: { marginRight: 15 } },
            _lodash2.default.has(object, 'fontWeight') && _react2.default.createElement(SwitchState, { icon: 'format-bold',
              defaultValue: 'normal',
              nextState: 'bold',
              value: object.fontWeight,
              onChange: this.props.onChange.bind(this, 'fontWeight') }),
            _lodash2.default.has(object, 'fontStyle') && _react2.default.createElement(SwitchState, { icon: 'format-italic',
              defaultValue: 'normal',
              nextState: 'italic',
              value: object.fontStyle,
              onChange: this.props.onChange.bind(this, 'fontStyle') }),
            _lodash2.default.has(object, 'textDecoration') && _react2.default.createElement(SwitchState, { icon: 'format-underline',
              defaultValue: 'none',
              nextState: 'underline',
              value: object.textDecoration,
              onChange: this.props.onChange.bind(this, 'textDecoration') })
          ),
          _react2.default.createElement(
            Column,
            { style: { "float": "left" } },
            _lodash2.default.has(object, 'fontSize') && _react2.default.createElement('input', { style: [styles.input, styles.integerInput, { width: 35 }],
              value: object.fontSize,
              onChange: function onChange(e) {
                return _this4.props.onChange('fontSize', e.target.value);
              } })
          ),
          _react2.default.createElement(
            Column,
            { style: { "float": "right", marginRight: 10 } },
            _react2.default.createElement(
              'select',
              { style: styles.select,
                value: object.fontFamily,
                onChange: function onChange(e) {
                  return _this4.props.onChange('fontFamily', e.target.value);
                } },
              this.fontFamilies.map(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2);

                var name = _ref6[0];
                var value = _ref6[1];
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
            { style: [styles.row, { paddingTop: 25, paddingRight: 10 }] },
            _react2.default.createElement('input', { style: [styles.input, styles.textInput],
              onChange: function onChange(e) {
                return _this4.props.onChange('text', e.target.value);
              },
              value: object.text })
          )
        )
      );
    }
  }]);

  return TextPanel;
})(Panel);

var StylePanel = exports.StylePanel = (function (_Panel3) {
  _inherits(StylePanel, _Panel3);

  function StylePanel() {
    var _Object$getPrototypeO3;

    var _temp3, _this5, _ret3;

    _classCallCheck(this, StylePanel);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret3 = (_temp3 = (_this5 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(StylePanel)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this5), _this5.modes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'], _temp3), _possibleConstructorReturn(_this5, _ret3);
  }

  _createClass(StylePanel, [{
    key: 'render',
    value: function render() {
      var _this6 = this;

      var object = this.props.object;

      return _react2.default.createElement(
        PropertyGroup,
        null,
        _react2.default.createElement(
          Columns,
          { label: 'Fill' },
          _react2.default.createElement(
            Column,
            null,
            _react2.default.createElement(ColorInput, { value: object.fill,
              onChange: this.props.onChange.bind(this, 'fill') })
          )
        ),
        _react2.default.createElement(
          Columns,
          { label: 'Stroke' },
          _react2.default.createElement(
            Column,
            null,
            _react2.default.createElement(ColorInput, { value: object.stroke,
              onChange: this.props.onChange.bind(this, 'stroke') })
          ),
          _react2.default.createElement(
            Column,
            { label: 'width' },
            _react2.default.createElement('input', { style: [[styles.input, styles.integerInput], { width: 30 }],
              onChange: function onChange(e) {
                return _this6.props.onChange('strokeWidth', e.target.value);
              },
              value: object.strokeWidth })
          ),
          _react2.default.createElement(
            Column,
            { showIf: _lodash2.default.has(object, 'radius'), label: 'radius' },
            _react2.default.createElement('input', { style: [styles.input, styles.integerInput, { width: 30 }],
              onChange: function onChange(e) {
                return _this6.props.onChange('radius', e.target.value);
              },
              value: object.radius })
          )
        ),
        _react2.default.createElement(
          Columns,
          { label: 'Blending' },
          _react2.default.createElement(
            Column,
            null,
            _react2.default.createElement(
              'select',
              { style: styles.select,
                value: object.blendMode,
                onChange: function onChange(e) {
                  return _this6.props.onChange('blendMode', e.target.value);
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
})(Panel);

var ArrangePanel = exports.ArrangePanel = (function (_Panel4) {
  _inherits(ArrangePanel, _Panel4);

  function ArrangePanel() {
    _classCallCheck(this, ArrangePanel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrangePanel).apply(this, arguments));
  }

  _createClass(ArrangePanel, [{
    key: 'render',
    value: function render() {
      var object = this.props.object;

      return _react2.default.createElement(
        PropertyGroup,
        null,
        _react2.default.createElement(
          Columns,
          { label: 'Arrange' },
          _react2.default.createElement(
            Column,
            null,
            _react2.default.createElement(
              Button,
              { onClick: this.props.onArrange.bind(this, 'back') },
              _react2.default.createElement(_Icon2.default, { icon: 'send-to-back' }),
              _react2.default.createElement(
                'span',
                null,
                'send to back'
              )
            ),
            _react2.default.createElement(
              Button,
              { onClick: this.props.onArrange.bind(this, 'front') },
              _react2.default.createElement(_Icon2.default, { icon: 'bring-to-front' }),
              _react2.default.createElement(
                'span',
                null,
                'bring to front'
              )
            )
          )
        )
      );
    }
  }]);

  return ArrangePanel;
})(Panel);

var PanelList = (function (_Component2) {
  _inherits(PanelList, _Component2);

  function PanelList() {
    _classCallCheck(this, PanelList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelList).apply(this, arguments));
  }

  _createClass(PanelList, [{
    key: 'render',
    value: function render() {
      var _this9 = this;

      var _props = this.props;
      var object = _props.object;
      var offset = _props.offset;
      var objectComponent = _props.objectComponent;

      var style = {
        left: offset.width + offset.x,
        top: offset.y + window.scrollY
      };
      return _react2.default.createElement(
        _reactPortal2.default,
        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: true },
        _react2.default.createElement(
          'div',
          { style: [styles.propertyPanel, style] },
          objectComponent.panels.map(function (Panel, i) {
            return _react2.default.createElement(Panel, _extends({ key: i }, _this9.props));
          })
        )
      );
    }
  }]);

  return PanelList;
})(_react.Component);

;

var styles = {
  propertyPanel: {
    position: "absolute",
    width: 200,
    top: 0,
    left: 0,
    padding: '0 5px 6px 5px',
    fontFamily: '"Lucida Grande", sans-serif',
    fontSize: 11
  },
  propertyGroup: {
    backgroundColor: '#f1f1f1',
    overflow: 'hidden',
    paddingBottom: 12,
    paddingTop: 2,
    paddingLeft: 10,
    border: '0px solid #d3d3d3',
    marginBottom: 5
  },
  inputHelper: {
    fontSize: 9,
    color: '#d2d2d2',
    paddingTop: 2,
    paddingLeft: 5
  },
  inlineInputHelper: {
    fontSize: 9,
    display: 'inline-block',
    marginLeft: 10
  },
  panelTitle: {
    float: 'left',
    width: 60,
    padding: 3,
    color: '#b8b8b8'
  },
  columns: {
    overflow: 'hidden',
    marginTop: 10
  },
  column: {
    float: 'left',
    marginRight: 5
  },
  input: {
    background: '#e1e1e1',
    borderWidth: 0,
    padding: '3px 5px',
    color: 'gray',
    borderRadius: 3
  },
  select: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    borderWidth: 0,
    padding: '3px 3px 3px 5px',
    outline: 'none',
    borderRadius: 0,
    borderRight: '3px solid #b7b7b7',
    color: 'gray',
    width: 75
  },
  integerInput: {
    width: 50,
    outline: 'none'
  },
  textInput: {
    marginTop: 2,
    outline: 'none',
    width: '100%',
    padding: 3
  },
  colorInput: {
    width: 18,
    height: 18,
    borderRadius: '50%',
    display: 'inline-block',
    background: 'white',
    marginRight: 3
  },
  color: {
    marginLeft: 2,
    marginTop: 2,
    width: 14,
    height: 14,
    display: 'inline-block',
    borderRadius: '50%'
  },
  empty: {
    display: 'none'
  },
  button: {
    color: '#515151',
    textDecoration: 'none',
    display: 'block',
    padding: '2px 0'
  }
};

exports.default = (0, _radium2.default)(PanelList);