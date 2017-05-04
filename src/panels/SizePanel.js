import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Icon from '../Icon';
import Panel from './Panel';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';


export default class SizePanel extends Panel {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
        };
    }

  render() {
    let { object, onChange } = this.props;
    return (
      <PropertyGroup object={object}>
        {_.has(object, 'width', 'height') && <Columns label="Size">
            <div style={[styles.column]}>
                <input style={[styles.input, styles.integerInput]} value={object.width}
                       onChange={e => {
                           if ( this.state.isChecked ) {
                               let scale = object.viewBoxHeight/object.viewBoxWidth;
                               let fixedHeight = Math.floor(e.target.value*scale);
                               this.props.onChange({
                                   'width': e.target.value,
                                   'height': fixedHeight.toString()
                               })
                           } else {
                               this.props.onChange('width', e.target.value)
                           }
                       }} />
                <div style={styles.inputHelper}>width</div>
            </div>
            <div style={[styles.column]}>
                <input style={[styles.input, styles.integerInput]}
                       value={object.height}
                       onChange={e => {
                           if ( this.state.isChecked ) {
                               let scale = object.viewBoxHeight/object.viewBoxWidth;
                               let fixedWidth = Math.floor(e.target.value*scale);
                               this.props.onChange({
                                   'height': e.target.value,
                                   'width': fixedWidth.toString()
                               })
                           } else {
                               this.props.onChange('height', e.target.value)
                           }
                       }} />
                <div style={styles.inputHelper}>height</div>
            </div>
        </Columns>}
          {_.has(object, 'viewBoxWidth', 'viewBoxHeight') && <Columns label="Fixed">
              <input
                  type='checkbox'
                  checked={this.state.isChecked}
                  onChange={
                      () => this.setState({
                          isChecked: !this.state.isChecked
                      })
                  }
              />
          </Columns>}
        <Columns label="Position">
          <Column showIf={_.has(object, 'x')} 
                  label="top" value={object.x}
                  onChange={this.props.onChange.bind(this, 'x')} />
          <Column showIf={_.has(object, 'y')} label="top" value={object.y}
                  onChange={this.props.onChange.bind(this, 'y')} />
        </Columns>
        {_.has(object, 'rotate') && <Columns label="Rotation">
          <Column label="angle" value={object.rotate}
                  onChange={this.props.onChange.bind(this, 'rotate')} />
        </Columns>}
        {_.has(object, 'opacity') && <Columns label="Opacity">
              <Column label="opacity" value={object.opacity}
                      onChange={this.props.onChange.bind(this, 'opacity')} />
          </Columns>}
      </PropertyGroup>
    );
  }
}