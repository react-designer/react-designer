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

export default class TextPanel extends Panel {
  fontFamilies = [
    ['Helvetica', 'Helvetica, Arial, sans-serif'],
    ['Helvetica Neue', '"Helvetica Neue", Arial, sans-serif'],
    ['Georgia', 'Georgia, serif'],
    ['American Typewriter', 'AmericanTypewriter, Georgia, serif'],
    ['Monaco', 'Monaco, consolas, monospace'],
  ];

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup showIf={_.has(object, 'text')}>
          <div style={styles.columns}>
            <Column style={{marginRight: 15}}>
              {_.has(object, 'fontWeight') &&
                <SwitchState icon="format-bold" 
                  defaultValue={'normal'}
                  nextState={'bold'}
                  value={object.fontWeight}
                  onChange={this.props.onChange.bind(this, 'fontWeight')} />}
              {_.has(object, 'fontStyle') &&
                <SwitchState icon="format-italic" 
                  defaultValue={'normal'}
                  nextState={'italic'}
                  value={object.fontStyle}
                  onChange={this.props.onChange.bind(this, 'fontStyle')} />}
              {_.has(object, 'textDecoration') &&
                <SwitchState icon="format-underline"
                  defaultValue={'none'}
                  nextState={'underline'}
                  value={object.textDecoration}
                  onChange={this.props.onChange.bind(this, 'textDecoration')} />}
            </Column>
            <Column style={{"float": "left"}}>
              {_.has(object, 'fontSize') &&
                <input style={[styles.input, styles.integerInput, {width: 35}]} 
                       value={object.fontSize}
                       onChange={(e) => this.props.onChange('fontSize', e.target.value)} />}
            </Column>
            <Column style={{"float": "right", marginRight: 10}}>
              <select style={styles.select} 
                      value={object.fontFamily}
                      onChange={(e) => this.props.onChange('fontFamily', e.target.value)}  >
                {this.fontFamilies.map(([name, value]) => 
                    <option key={value} value={value}>{name}</option>)}
              </select>
            </Column>
            <div style={[styles.row, {paddingTop: 25, paddingRight: 10}]}>
              <input style={[styles.input, styles.textInput]} 
                     onChange={(e) => this.props.onChange('text', e.target.value)}
                     value={object.text} />
            </div>
          </div>
        </PropertyGroup>
    );
  }
}