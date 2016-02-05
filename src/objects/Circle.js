import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Circle extends Vector {
  static meta = {
    icon: <Icon icon={'circle'} size={30} />,
    initial: {
      width: 5,
      height: 5,
      rotate: 0,
      fill: "yellow",
      strokeWidth: 0,
      blendMode: "normal"
    }
  };

  render() {
    let {object, index} = this.props;
    return (
      <ellipse style={this.getStyle()}
         {...this.getObjectAttributes()}
         rx={object.width / 2}
         ry={object.height / 2}
         cx={object.x + object.width / 2}
         cy={object.y + object.height / 2} />
    );
  }
}