import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Icon from '../Icon';

import styles from './styles';

const PropertyGroup = ({showIf=true, ...props}) => {
  if (!showIf) {
    return <div style={styles.empty} />;
  }
  return (
    <div style={styles.propertyGroup}>
      {props.children}
    </div>
  );
};

export default Radium(PropertyGroup);