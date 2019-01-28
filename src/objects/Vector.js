import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import {SizePanel, TextPanel,
        StylePanel, ArrangePanel, ImagePanel} from '../panels';


export default class Vector extends Component {
  static panels = [
    SizePanel,
    TextPanel,
    StylePanel,
    ImagePanel,
    ArrangePanel
  ];

  getStyle() {
    let {object} = this.props;
    return {
      mixBlendMode: object.blendMode
    }
  }

  getTransformMatrix({rotate, x, y, width, height}) {
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
