import React, {Component} from 'react';
import _ from 'lodash';

import Icon from '../Icon';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';
import WebFont from 'webfontloader';

export default class TextPanel extends Component {
  fontFamilies = [
    {name: 'Alegreya Sans', family: 'Alegreya Sans'},
    {name: 'Alegreya', family: 'Alegreya'},
    {name: 'American Typewriter', family:'AmericanTypewriter, Georgia, serif'},
    {name: 'Anonymous Pro', family: 'Anonymous Pro'},
    {name: 'Archivo Narrow', family: 'Archivo Narrow'},
    {name: 'Arvo', family: 'Arvo'},
    {name: 'Bitter', family: 'Bitter'},
    {name: 'Cardo', family: 'Cardo'},
    {name: 'Chivo', family: 'Chivo'},
    {name: 'Crimson Text', family: 'Crimson Text'},
    {name: 'Domine', family: 'Domine'},
    {name: 'Fira Sans', family: 'Fira Sans'},
    {name: 'Georgia', family:'Georgia, serif'},
    {name: 'Helvetica Neue', family:'"Helvetica Neue", Arial, sans-serif'},
    {name: 'Helvetica', family:'Helvetica, Arial, sans-serif'},
    {name: 'Inconsolata', family: 'Inconsolata'},
    {name: 'Karla', family: 'Karla'},
    {name: 'Lato', family: 'Lato'},
    {name: 'Libre Baskerville', family: 'Libre Baskerville'},
    {name: 'Lora', family: 'Lora'},
    {name: 'Merriweather', family: 'Merriweather'},
    {name: 'Monaco', family:'Monaco, consolas, monospace'},
    {name: 'Montserrat', family:'Montserrat'},
    {name: 'Neuton', family:'Neuton'},
    {name: 'Old Standard TT', family: 'Old Standard TT'},
    {name: 'Open Sans', family: 'Open Sans'},
    {name: 'PT Serif', family: 'PT Serif'},
    {name: 'Playfair Display', family: 'Playfair Display'},
    {name: 'Poppins', family: 'Poppins'},
    {name: 'Roboto Slab', family: 'Roboto Slab'},
    {name: 'Roboto', family: 'Roboto'},
    {name: 'Source Pro', family: 'Source Pro'},
    {name: 'Source Sans Pro', family: 'Source Sans Pro'},
    {name: 'Varela Round', family:'Varela Round'},
    {name: 'Work Sans', family: 'Work Sans'},
  ];

  handleFontFamilyChange = e => {
    const value = e.target.value
    WebFont.load({
      google: {
        families: [value]
      }
    });
    this.props.onChange('fontFamily', value)
  }

  sortFonts = (f1, f2) => f1.name.toLowerCase() > f2.name.toLowerCase() ? 1 : f1.name.toLowerCase() < f2.name.toLowerCase() ? -1 : 0

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup showIf={_.has(object, 'text')}>
          <div style={styles.columns}>
            <Column style={{"float": "right", "marginRight": 15}}>
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
            <Column style={{"float": "right"}}>
              {_.has(object, 'fontSize') &&
                <input style={{...styles.input, ...styles.integerInput, width: 35}}
                       value={object.fontSize}
                       onChange={(e) => this.props.onChange('fontSize', e.target.value)} />}
            </Column>
            <Column style={{"float": "right", marginRight: 10}}>
              <select style={styles.select}
                      value={object.fontFamily}
                      onChange={this.handleFontFamilyChange}>
                {this.fontFamilies.sort(this.sortFonts).map(({name, family}) => (
                  <option key={family} value={family}>{name}</option>
                ))}
              </select>
            </Column>
            <div style={{...styles.row, paddingTop: 25, paddingRight: 10}}>
              <input style={{...styles.input, ...styles.textInput}}
                     onChange={(e) => this.props.onChange('text', e.target.value)}
                     value={object.text} />
            </div>
          </div>
        </PropertyGroup>
    );
  }
}
