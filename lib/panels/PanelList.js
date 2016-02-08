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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

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

var PanelList = (function (_Component) {
  _inherits(PanelList, _Component);

  function PanelList() {
    _classCallCheck(this, PanelList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PanelList).apply(this, arguments));
  }

  _createClass(PanelList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          { style: [_styles2.default.propertyPanel, style] },
          objectComponent.panels.map(function (Panel, i) {
            return _react2.default.createElement(Panel, _extends({ key: i }, _this2.props));
          })
        )
      );
    }
  }]);

  return PanelList;
})(_react.Component);

;

exports.default = (0, _radium2.default)(PanelList);