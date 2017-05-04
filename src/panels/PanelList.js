import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Portal from 'react-portal';

import Icon from '../Icon';
import Panel from './Panel';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';

class PanelList extends Component {
  render() {
    let {object, offset, objectComponent} = this.props;
    let style = {
      left: offset.width + offset.x,
      top: offset.y + window.scrollY,
    };
    return (
      <Portal closeOnEsc closeOnOutsideClick isOpened={true}>
        <div style={[styles.propertyPanel, style]}>
          {objectComponent.panels.map((Panel, i) => <Panel key={i} {...this.props} />)}
        </div>
      </Portal>
    );
  }
};

export default Radium(PanelList);