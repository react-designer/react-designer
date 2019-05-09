import React, {Component} from 'react';
import _ from 'lodash';

import Icon from '../Icon';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class ImagePanel extends Component {
  onDrop (acceptedFiles) {
    if (acceptedFiles.length == 0) {
      return;
    }

    const file = acceptedFiles[0];
    const fr = new FileReader();

    const setImage = function(e) {
      this.props.onChange('xlinkHref', e.target.result);
    }.bind(this);
    fr.onload = setImage;
    fr.readAsDataURL(file);
  }

  render() {
    const {object} = this.props;
    return (
      <PropertyGroup object={object} showIf={_.has(object, 'xlinkHref')}>
          <Columns label="Image">
            <Column>
              <Dropzone
                  accept="image/*"
                  onDrop={this.onDrop.bind(this)}
                  multiple={false}
                  style={{
                    float:'left',
                    marginRight: '3px',
                    padding: '3px',
                    border: '1px solid gray',
                    color: 'gray',
                    borderRadius: '3px',
                    width: '100px',
                    textAlign: 'center',
                  }}
                  activeStyle={{
                    border: '1px solid blue',
                    backgroundColor: 'white',
                    color: 'black',
                  }}
              >
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Drop new file</p>
                    </div>
                )}
              </Dropzone>
            </Column>
          </Columns>
      </PropertyGroup>
    );
  }
}
