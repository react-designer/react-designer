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
import Dropzone from 'react-dropzone';

export default class ImagePanel extends Panel {
  state = {
    files: []
  }

  onDrop (files) {
    this.props.onChange("href", "/img/"+files[0].name);
    console.log('Received files: ', files);
    this.setState({
      files: files
    });
  }

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup object={object}  showIf={_.has(object, 'href')}>
          <div style={styles.columns}>
            <Column>
              <div className="dropzone--wrapper">
                <Dropzone onDrop={this.onDrop.bind(this)} multiple={false}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
              </div>
            </Column>
          </div>
      </PropertyGroup>
    );
  }
}