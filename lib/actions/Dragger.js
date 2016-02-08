"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var object = _ref.object;
  var startPoint = _ref.startPoint;
  var mouse = _ref.mouse;

  return _extends({}, object, {
    x: mouse.x - (startPoint.clientX - startPoint.objectX),
    y: mouse.y - (startPoint.clientY - startPoint.objectY)
  });
};