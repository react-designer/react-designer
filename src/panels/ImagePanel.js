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
import request from 'superagent';

export default class ImagePanel extends Panel {
  onDrop (files) {
    var file = files[0];
    var fr = new FileReader();

    var setImage = function(e) {
      this.props.onChange('xlinkHref', e.target.result);
    }.bind(this);
    fr.onload = setImage;
    fr.readAsDataURL(files[0]);
  }

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup object={object}  showIf={_.has(object, 'xlinkHref')}>
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
