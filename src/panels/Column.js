import React, {Component} from 'react';
import _ from 'lodash';
import Icon from '../Icon';

import styles from './styles';

const Column = ({showIf=true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }

  return (
    <div style={{...styles.column, ...props.style}}>
      {props.children ||
        <input style={{...styles.input, ...styles.integerInput}} value={props.value}
               onChange={(e) => props.onChange(e.target.value)} />
      }
      {props.label &&
        <div style={styles.inputHelper}>{props.label}</div>}
    </div>
  );
};

export default Column;
