'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../constants');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Vector2 = require('./Vector');

var _Vector3 = _interopRequireDefault(_Vector2);

var _BezierEditor = require('../editors/BezierEditor');

var _BezierEditor2 = _interopRequireDefault(_BezierEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Path = (function (_Vector) {
  _inherits(Path, _Vector);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Path).apply(this, arguments));
  }

  _createClass(Path, [{
    key: 'buildPath',
    value: function buildPath(object) {
      var path = object.path;

      var curves = path.map(function (_ref, i) {
        var x1 = _ref.x1;
        var y1 = _ref.y1;
        var x2 = _ref.x2;
        var y2 = _ref.y2;
        var x = _ref.x;
        var y = _ref.y;
        return 'C ' + x1 + ' ' + y1 + ', ' + x2 + ' ' + y2 + ', ' + x + ' ' + y;
      });

      var instructions = ['M ' + object.moveX + ' ' + object.moveY].concat(_toConsumableArray(curves));

      if (object.closed) {
        instructions = [].concat(_toConsumableArray(instructions), ['Z']);
      }

      return instructions.join('\n');
    }
  }, {
    key: 'getTransformMatrix',
    value: function getTransformMatrix(_ref2) {
      var rotate = _ref2.rotate;
      var x = _ref2.x;
      var y = _ref2.y;
      var moveX = _ref2.moveX;
      var moveY = _ref2.moveY;

      return '\n      translate(' + (x - moveX) + ' ' + (y - moveY) + ')\n      rotate(' + rotate + ' ' + x + ' ' + y + ')\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var object = this.props.object;

      var fill = object.closed ? object.fill : "transparent";
      return _react2.default.createElement('path', _extends({ style: this.getStyle(object)
      }, this.getObjectAttributes(), {
        d: this.buildPath(object),
        fill: fill }));
    }
  }]);

  return Path;
})(_Vector3.default);

Path.meta = {
  initial: {
    fill: "#e3e3e3",
    closed: false,
    rotate: 0,
    moveX: 0,
    moveY: 0,
    path: [],
    stroke: "gray",
    strokeWidth: 1
  },
  mode: _constants.modes.DRAW_PATH,
  icon: _react2.default.createElement(_Icon2.default, { icon: 'polygon', size: 30 }),
  editor: _BezierEditor2.default
};
exports.default = Path;