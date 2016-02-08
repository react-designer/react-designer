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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Panel2 = require('./Panel');

var _Panel3 = _interopRequireDefault(_Panel2);

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

var ArrangePanel = (function (_Panel) {
  _inherits(ArrangePanel, _Panel);

  function ArrangePanel() {
    _classCallCheck(this, ArrangePanel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrangePanel).apply(this, arguments));
  }

  _createClass(ArrangePanel, [{
    key: 'render',
    value: function render() {
      var object = this.props.object;

      return _react2.default.createElement(
        _PropertyGroup2.default,
        null,
        _react2.default.createElement(
          _Columns2.default,
          { label: 'Arrange' },
          _react2.default.createElement(
            _Column2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.props.onArrange.bind(this, 'back') },
              _react2.default.createElement(_Icon2.default, { icon: 'send-to-back' }),
              _react2.default.createElement(
                'span',
                null,
                'send to back'
              )
            ),
            _react2.default.createElement(
              _Button2.default,
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
})(_Panel3.default);

exports.default = ArrangePanel;