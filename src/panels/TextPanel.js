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
import WebFont from 'webfontloader';
import Autocomplete from 'react-autocomplete';

export default class TextPanel extends Panel {
  constructor(props){
    super()
    // console.log(props)
    this.state = { value: props.object.fontFamily }
  }

  menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'red',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
  }

  fontFamilies = [
    // {name: 'PT Serif', family: 'PT Serif, Arial, serif'},
    // {name: 'Arvo', family: '"Arvo", Arial, serif'},
    // {name: 'Bitter', family: 'Bitter, serif'},
    // {name: 'Cardo', family: 'Cardo, serif'},
    // {name: 'Domine', family: 'Domine, Arial, serif'},
    // {name: 'Old Standard TT', family: '"Old Standard TT", Arial, serif'},
    // {name: 'Varela Round', family:'Varela Round, serif'},
    // {name: 'Chivo', family: 'Chivo, sans-serif'},
    // {name: 'Roboto', family: 'Roboto, sans-serif'},
    // {name: 'Roboto Slab', family: 'Roboto Slab, serif'},
    // {name: 'Crimson Text', family: 'Crimson Text, serif'},
    // {name: 'Libre Bakersville', family: 'Libre Bakersville, serif'},
    // {name: 'Montserrat', family:'Montserrat, sans-serif'},
    // {name: 'Archivo Narrow', family: 'Archivo Narrow, sans-serif'},
    // {name: 'Lato', family: 'Lato, sans-serif'},
    // {name: 'Anonymous Pro', family: 'Anonymous Pro, monospace'},
    // {name: 'Merriweather', family: 'Merriweather, serif'},
    // {name: 'Neuton', family:'Neuton, serif'},
    // {name: 'Open Sans', family: 'Open Sans, sans-serif'},
    // {name: 'Poppins', family: 'Poppins, sans-serif'},
    // {name: 'Lora', family: 'Lora, serif'},
    // {name: 'Source Serif Pro', family: 'Source Serif Pro, serif'},
    // {name: 'Karla', family: 'Karla, sans-serif'},
    // {name: 'Montserrat', family:'Montserrat, serif'},
    // {name: 'Source Sans Pro', family: 'Source Sans Pro, sans-serif'},
    // {name: 'Inconsolata', family: 'Inconsolata, monospace'},
    // {name: 'Playfair Display', family: 'Playfair Display, serif'},
    // {name: 'Work Sans', family: 'Work Sans, serif'},
    // {name: 'Alegreya', family: 'Alegreya, serif'},
    // {name: 'Alegreya Sans', family: 'Alegreya Sans, sans-serif'},
    // {name: 'Fira Sans', family: 'Fira Sans, sans-serif'},
    {name: 'PT Serif', family: 'PT Serif'},
    {name: 'Arvo', family: 'Arvo'},
    {name: 'Bitter', family: 'Bitter'},
    {name: 'Cardo', family: 'Cardo'},
    {name: 'Domine', family: 'Domine'},
    {name: 'Old Standard TT', family: 'Old Standard TT'},
    {name: 'Varela Round', family:'Varela Round'},
    {name: 'Chivo', family: 'Chivo'},
    {name: 'Roboto', family: 'Roboto'},
    {name: 'Roboto Slab', family: 'Roboto Slab'},
    {name: 'Crimson Text', family: 'Crimson Text'},
    {name: 'Libre Baskerville', family: 'Libre Baskerville'},
    {name: 'Montserrat', family:'Montserrat'},
    {name: 'Archivo Narrow', family: 'Archivo Narrow'},
    {name: 'Lato', family: 'Lato'},
    {name: 'Anonymous Pro', family: 'Anonymous Pro'},
    {name: 'Merriweather', family: 'Merriweather'},
    {name: 'Neuton', family:'Neuton'},
    {name: 'Open Sans', family: 'Open Sans'},
    {name: 'Poppins', family: 'Poppins'},
    {name: 'Lora', family: 'Lora'},
    {name: 'Source Pro', family: 'Source Pro'},
    {name: 'Karla', family: 'Karla'},
    {name: 'Source Sans Pro', family: 'Source Sans Pro'},
    {name: 'Inconsolata', family: 'Inconsolata'},
    {name: 'Playfair Display', family: 'Playfair Display'},
    {name: 'Work Sans', family: 'Work Sans'},
    {name: 'Alegreya', family: 'Alegreya'},
    {name: 'Alegreya Sans', family: 'Alegreya Sans'},
    {name: 'Fira Sans', family: 'Fira Sans'},
  ];

  handleFontFamilyChange(value){
    // console.log(e, this, this.props)
    this.setState({ value })
    WebFont.load({
      google: {
        families: [value]
      }
    });
    this.props.onChange('fontFamily', value)
    // console.log(this, e.target.options[e.target.selectedIndex].text)
    // this.props.onChange('fontFamily', e.target.value)
    // (e) => this.props.onChange('fontFamily', e.target.value)
  }

  matchStateToTerm (state, value) {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.family.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  }

  sortStates (a, b, value) {
    return (
      a.name.toLowerCase().indexOf(value.toLowerCase()) >
      b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
    )
  }

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
            <Column style={{"float": "right"}} label="font size">
              {_.has(object, 'fontSize') &&
                <input style={[styles.input, styles.integerInput, {width: 35}]}
                       value={object.fontSize}
                       onChange={(e) => this.props.onChange('fontSize', e.target.value)} />}
            </Column>
            <Column style={{"float": "right", marginRight: 10, padding: '3px 5px'}} label="choose font">
              <Autocomplete
                value={this.state.value}
                style={this.menuStyle}
                labelText=""
                items={this.fontFamilies}
                getItemValue={(item) => item.name}
                shouldItemRender={this.matchStateToTerm}
                sortItems={this.sortStates}
                onChange={(event, value) => this.setState({ value })}
                onSelect={this.handleFontFamilyChange.bind(this)}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.family}
                  >{item.name}</div>
                )}
              />
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
