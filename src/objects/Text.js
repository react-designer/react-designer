import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Text extends Vector {
  static meta = {
    icon: <Icon icon={'text'} size={30} />,
    initial: {
      text: "Hello",
      rotate: 0,
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 50,
      fontFamily: "Helvetica"
    }
  };

  getStyle() {
    let {object} = this.props;
    return {
      ...super.getStyle(),
      dominantBaseline: "central",
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration,
      mixBlendMode: object.blendMode,
      WebkitUserSelect: "none"
    };
  }

  getTransformMatrix({rotate, x, y}) {
    return `rotate(${rotate} ${x} ${y})`;
  }

  render() {
    let {object, index} = this.props;
    return (
      <text style={this.getStyle()}
         {...this.getObjectAttributes()}
         textAnchor="middle"
         fontSize={object.fontSize}
         fontFamily={object.fontFamily}>
        {object.text}
       </text>
    );
  }
}