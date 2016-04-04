import React, {Component} from 'react';
import {modes, generateUUID} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

// function generateUUID() {
//     var d = new Date().getTime();
//     if(window.performance && typeof window.performance.now === "function"){
//         d += performance.now(); //use high-precision timer if available
//     }
//     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = (d + Math.random()*16)%16 | 0;
//         d = Math.floor(d/16);
//         return (c=='x' ? r : (r&0x3|0x8)).toString(16);
//     });
//     return uuid;
// }


export default class Title extends Vector {
  static meta = {
    icon: <Icon icon={'text'} size={30} />,
    uuid: "1234",
    initial: {
      width: 100,
      height: 30,
      fill: "rgba(124,240,10,0.5)",
      stroke: "#646464",
      strokeWidth: 2,
      radius: 5,
      text: "Button",
      rotate: 0,
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      // fill: "black",
      fontSize: 10,
      fontFamily: "Helvetica"
    }
  };

  render() {
    let {object} = this.props;
    let style = {
      dominantBaseline: 'central',
      textAnchor: 'middle',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration
    };
    // console.log(object)
    return (
      <g>
        <rect style={this.getStyle()}
          {...this.getObjectAttributes()}
              rx={object.radius}
              width={object.width}
              height={object.height}/>
        <text fill={"black"} style={style}
              fontSize={object.fontSize}
              fontFamily={object.fontFamily}
              x={object.x + object.width / 2}
              y={object.y + object.height / 2}>{object.text}</text>
      </g>
    );
  }
}
