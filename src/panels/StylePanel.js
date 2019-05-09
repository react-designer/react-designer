import React, {Component} from 'react';
import _ from 'lodash';

import Icon from '../Icon';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';
import ColorInput from './ColorInput';

export default class StylePanel extends Component {
  modes = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ];

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup>
          <Columns label="Fill" showIf={_.has(object, 'fill')}>
            <Column>
              <ColorInput value={object.fill}
                          onChange={this.props.onChange.bind(this, 'fill')} />
            </Column>
          </Columns>
          <Columns label="Stroke" showIf={_.has(object, 'stroke')}>
            <Column>
              <ColorInput value={object.stroke}
                          onChange={this.props.onChange.bind(this, 'stroke')} />
            </Column>
            <Column label="width">
              <input style={{...styles.input, ...styles.integerInput, width: 30}}
                     onChange={(e) => this.props.onChange('strokeWidth', e.target.value)}
                     value={object.strokeWidth} />
            </Column>
            <Column showIf={_.has(object, 'radius')} label="radius">
              <input style={{...styles.input, ...styles.integerInput, width: 30}}
                     onChange={(e) => this.props.onChange('radius', e.target.value)}
                     value={object.radius} />
            </Column>
          </Columns>
          <Columns label="Blending">
            <Column>
              <select style={styles.select}
                      value={object.blendMode}
                      onChange={(e) => this.props.onChange('blendMode', e.target.value)}>
                {this.modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
              </select>
            </Column>
          </Columns>
        </PropertyGroup>
    );
  }
}
