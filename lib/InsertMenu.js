'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertMenu = (function (_Component) {
  _inherits(InsertMenu, _Component);

  function InsertMenu() {
    _classCallCheck(this, InsertMenu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InsertMenu).apply(this, arguments));
  }

  _createClass(InsertMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var currentTool = _props.currentTool;
      var tools = _props.tools;

      var keys = Object.keys(tools);

      return _react2.default.createElement(
        'div',
        { style: styles.insertMenu },
        _react2.default.createElement(
          'div',
          { style: styles.mainIcon },
          currentTool ? tools[currentTool].meta.icon : _react2.default.createElement(_Icon2.default, { icon: "add", size: 30 })
        ),
        _react2.default.createElement(
          'ul',
          { style: styles.toolBox },
          keys.map(function (type, i) {
            return _react2.default.createElement(
              'li',
              { style: [styles.toolBoxItem, currentTool === type && styles.currentToolboxItem],
                onMouseDown: _this2.props.onSelect.bind(_this2, type),
                key: i },
              tools[type].meta.icon
            );
          })
        )
      );
    }
  }]);

  return InsertMenu;
})(_react.Component);

var styles = {
  insertMenu: {
    position: 'absolute',
    marginTop: 0,
    marginLeft: -40,
    height: 40,
    width: 40,
    overflow: 'hidden',
    ':hover': {
      background: '#eeeff5',
      height: 'auto'
    }
  },
  toolBox: {
    margin: 0,
    padding: 0
  },
  toolBoxItem: {
    listStyle: "none",
    padding: "5px 5px",
    ":hover": {
      background: "#ebebeb"
    }
  },
  currentToolboxItem: {
    background: "#ebebeb"
  },
  mainIcon: {
    padding: "10px 5px",
    borderBottom: "1px solid #e0e0e0"
  }

};

exports.default = (0, _radium2.default)(InsertMenu);