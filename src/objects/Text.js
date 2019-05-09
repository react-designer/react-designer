import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';
import WebFont from 'webfontloader';

export default class Text extends Vector {
  static meta = {
    icon: <Icon icon={'text'} size={30} />,
    initial: {
      text: "Type some text...",
      rotate: 0,
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 20,
      fontFamily: "Open Sans"
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
    WebFont.load({
      google: {
        families: [object.fontFamily]
      }
    });
    const {rotate, ... restOfAttributes} = this.getObjectAttributes()
    return (
      <text style={this.getStyle()}
         {...restOfAttributes}
         textAnchor="right"
         fontSize={object.fontSize}
         fontFamily={object.fontFamily}>
        {object.text}
       </text>
    );
  }
}
