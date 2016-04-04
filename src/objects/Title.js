import Text from './Text';

import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

export default class Title extends Text {
  static meta = {
    icon: <center style={{color: "gray"}}>Title</center>,
    initial: {
      ...Text.meta.initial,
      text: "Insert Title Here...",
      fill: "black",
      fontStyle: "italic",
      fontSize: 12
    }
  };
}
