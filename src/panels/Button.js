import React, {Component} from 'react';
import _ from 'lodash';
import Icon from '../Icon';

import styles from './styles';

const Button = ({onClick, ...props}) => {
  let _onClick = (e, ...args) => {
    e.preventDefault();
    onClick(...args);
  }
  return (
    <a href="#" style={styles.button} onClick={_onClick}>
      {props.children}
    </a>
  );
}

export default Button;
