'use strict';

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwitchState = function SwitchState(props) {
  var selected = props.value !== props.defaultValue;
  var newValue = selected ? props.defaultValue : props.nextState;
  return _react2.default.createElement(_Icon2.default, { icon: props.icon, active: selected,
    onClick: function onClick() {
      return props.onChange(newValue);
    } });
};

exports.default = (0, _radium2.default)(SwitchState);