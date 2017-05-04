import React, {Component} from 'react';
import Radium from 'radium';
import ColorPicker from 'react-color';
import _ from 'lodash';
import Icon from '../Icon';

import styles from './styles';

class ColorInput extends Component {
  state = {
    show: false,
    x: 0,
    y: 0
  };

  toggleVisibility(event) {
    if (event.preventDefault) {
      event.preventDefault();
      let rect = event.target.getBoundingClientRect();
      this.setState({
        x: rect.left,
        y: rect.top
      });
    }

    let {show} = this.state;
    this.setState({
      show: !show
    })
  }

  handleChange(color) {
    let {r, g, b, a} = color.rgb;
    this.props.onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
  }

  render() {
    let {show, x, y} = this.state;
    let {value} = this.props;
    
    let position = {
      position: "fixed",
      left: x + 3,
      top: y - 2
    };

    return (
      <div>
        <ColorPicker
          color={value}
          display={show}
          positionCSS={position}
          onChange={this.handleChange.bind(this)}
          onClose={this.toggleVisibility.bind(this)}
          type="chrome" />
        <a href="#" 
         style={styles.colorInput}
         onClick={this.toggleVisibility.bind(this)}>
          <span style={[styles.color, {backgroundColor: value}]} />
         </a>
      </div>
    );
  }
}

export default Radium(ColorInput);