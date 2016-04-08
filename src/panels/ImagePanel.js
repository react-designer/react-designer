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
  state = {
    files: []
  }

  onDrop (files) {
    $("#loader-wrapper").removeClass("hide")
    let {id} = this.props
    var req = request.post(`/menus/${id}/uploads`);
    req.query({ format: 'json' })
    req.field('authenticity_token', $('meta[name="csrf-token"]').attr('content') )
    files.forEach((file)=> {
        req.attach("upload[mediable]", file);
    });
    req.end((err, res)=>{
      this.props.onChange("xlinkHref", res.body.mediable);
      $("#loader-wrapper").addClass("hide")
    });

    this.setState({
      files: files
    });
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
