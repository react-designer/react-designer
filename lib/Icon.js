'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'renderGraphic',
    value: function renderGraphic() {
      switch (this.props.icon) {
        case 'my-icon':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z' })
          );
        case 'another-icon':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z' })
          );
        case 'format-bold':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4h-6.25v14h7.04c2.09  0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zm-5.6-4.29h3c.83 0 1.5.67 1.5 1.5s-.67  1.5-1.5 1.5h-3v-3zm3.5 9h-3.5v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z' })
          );
        case 'format-italic':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M10 4v3h2.21l-3.42 8h-2.79v3h8v-3h-2.21l3.42-8h2.79v-3z' })
          );
        case 'format-underline':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M12 17c3.31 0 6-2.69 6-6v-8h-2.5v8c0 1.93-1.57 3.5-3.5  3.5s-3.5-1.57-3.5-3.5v-8h-2.5v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2h-14z' })
          );
        case 'format-align-left':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M15 15h-12v2h12v-2zm0-8h-12v2h12v-2zm-12  6h18v-2h-18v2zm0 8h18v-2h-18v2zm0-18v2h18v-2h-18z' })
          );
        case 'format-align-center':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M7 15v2h10v-2h-10zm-4 6h18v-2h-18v2zm0-8h18v-2h-18v2zm4-6v2h10v-2h-10zm-4-4v2h18v-2h-18z' })
          );
        case 'format-align-right':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M3 21h18v-2h-18v2zm6-4h12v-2h-12v2zm-6-4h18v-2h-18v2zm6-4h12v-2h-12v2zm-6-6v2h18v-2h-18z' })
          );
        case 'add-box':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M19 3h-14c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-2  10h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z' })
          );
        case 'add':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z' })
          );
        case 'text-format':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M5 17v2h14v-2h-14zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75  11h2.1l.9-2.2zm2.5-6.82l1.87 5.02h-3.74l1.87-5.02z' })
          );
        case 'text':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M5 17v2h14v-2h-14zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75 11h2.1l.9-2.2zm2.5-6.82l1.87 5.02h-3.74l1.87-5.02z' })
          );
        case 'rectangle':
          return _react2.default.createElement('rect', { width: 14, height: 14, x: 4, y: 5, rx: 3, ry: 3 });
        case 'circle':
          return _react2.default.createElement('circle', { r: 8, cx: 11, cy: 12 });
        case 'polygon':
          return _react2.default.createElement(
            'g',
            { transform: "scale(0.034) translate(100 25)" },
            _react2.default.createElement('path', { d: 'M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923, 0-30.628,8.49-38.608,22.292 L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462, 170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926 c15.925,0,30.634-8.491, 38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z' })
          );
        case 'rotate':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M18.4 10.6c-1.85-1.61-4.25-2.6-6.9-2.6-4.65 0-8.58 3.03-9.96 7.22l2.36.78c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88l-3.62  3.62h9v-9l-3.6 3.6z' })
          );
        case 'send-to-back':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('rect', { x: 7, y: 7, width: 13, height: 13, fill: '#ababab', strokeWidth: 1, stroke: 'black' }),
            _react2.default.createElement('rect', { x: 1, y: 1, width: 13, height: 13, fill: 'white', stroke: 'black', strokeWidth: 1 })
          );
        case 'bring-to-front':
          return _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('rect', { x: 7, y: 7, width: 13, height: 13, fill: 'white', strokeWidth: 1, stroke: 'black' }),
            _react2.default.createElement('rect', { x: 1, y: 1, width: 13, height: 13, fill: '#ababab', stroke: 'black', strokeWidth: 1 })
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        fill: this.props.active ? "black" : "#b5b5b5",
        verticalAlign: "middle",
        width: this.props.size,
        height: this.props.size
      };
      return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 24 24',
          onClick: this.props.onClick,
          preserveAspectRatio: 'xMidYMid meet', fit: true,
          style: _extends({}, styles, this.props.style) },
        this.renderGraphic()
      );
    }
  }]);

  return Icon;
})(_react.Component);

Icon.defaultProps = {
  size: 16
};
exports.default = Icon;
;