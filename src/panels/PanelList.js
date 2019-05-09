import React, {Component} from 'react';
import _ from 'lodash';
import { Portal } from 'react-portal';

import Icon from '../Icon';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';

class PanelList extends Component {
  render() {
    let {object, offset, objectComponent, id} = this.props;
    let style = {
      left: offset.width + offset.x,
      top: offset.y + window.scrollY,
    };


    return (
      <Portal className="propertyPanel" closeOnEsc closeOnOutsideClick isOpened={true}>
        <div style={{...styles.propertyPanel, ...style}}>
          {objectComponent.panels.map((Panel, i) => <Panel key={i} id={id} {...this.props} />)}
        </div>
      </Portal>
    );
  }
};

export default PanelList;
