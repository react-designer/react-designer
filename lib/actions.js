"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scale = exports.scale = function scale(_ref) {
  var object = _ref.object;
  var startPoint = _ref.startPoint;
  var mouse = _ref.mouse;
  var objectX = startPoint.objectX;
  var objectY = startPoint.objectY;
  var clientX = startPoint.clientX;
  var clientY = startPoint.clientY;

  var width = startPoint.width + mouse.x - clientX;
  var height = startPoint.height + mouse.y - clientY;

  return _extends({}, object, {
    x: width > 0 ? objectX : objectX + width,
    y: height > 0 ? objectY : objectY + height,
    width: Math.abs(width),
    height: Math.abs(height)
  });
};

var rotate = exports.rotate = function rotate(_ref2) {
  var object = _ref2.object;
  var startPoint = _ref2.startPoint;
  var mouse = _ref2.mouse;

  var angle = Math.atan2(startPoint.objectX + (object.width || 0) / 2 - mouse.x, startPoint.objectY + (object.height || 0) / 2 - mouse.y);

  var asDegree = angle * 180 / Math.PI;
  var rotation = (asDegree + 45) * -1;

  return _extends({}, object, {
    rotate: rotation
  });
};

var drag = exports.drag = function drag(_ref3) {
  var object = _ref3.object;
  var startPoint = _ref3.startPoint;
  var mouse = _ref3.mouse;

  return _extends({}, object, {
    x: mouse.x - (startPoint.clientX - startPoint.objectX),
    y: mouse.y - (startPoint.clientY - startPoint.objectY)
  });
};