import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import {SizePanel, TextPanel,
        StylePanel, ArrangePanel} from '../panels';


export default class Vector extends Component {
  static panels = [
    SizePanel,
    TextPanel,
    StylePanel,
    ArrangePanel
  ];

  // generateUUID() {
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

  getStyle() {
    let {object} = this.props;
    return {
      mixBlendMode: object.blendMode
    }
  }

  getTransformMatrix({rotate, x, y, width, height}) {
    console.log(rotate)
    if (rotate) {
      let centerX = width / 2 + x;
      let centerY = height / 2 + y;
      return `rotate(${rotate} ${centerX} ${centerY})`;
    }
  }

  getObjectAttributes() {
    let {object, onRender, ...rest} = this.props;
    return {
      ...object,
      transform: this.getTransformMatrix(object),
      ref: onRender,
      ...rest
    };
  }
}
