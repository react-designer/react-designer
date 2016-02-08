"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var object = _ref.object;
  var startPoint = _ref.startPoint;
  var mouse = _ref.mouse;

  var angle = Math.atan2(startPoint.objectX + (object.width || 0) / 2 - mouse.x, startPoint.objectY + (object.height || 0) / 2 - mouse.y);

  var asDegree = angle * 180 / Math.PI;
  var rotation = (asDegree + 45) * -1;

  return _extends({}, object, {
    rotate: rotation
  });
};