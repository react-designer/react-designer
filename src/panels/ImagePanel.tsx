import React, { Component } from 'react'
import _ from 'lodash'
import PropertyGroup from './PropertyGroup'
import Columns from './Columns'
import Column from './Column'
import Dropzone from 'react-dropzone'

export default class ImagePanel extends Component {
  onDrop(acceptedFiles) {
    if (acceptedFiles.length == 0) {
      return
    }
    const file = acceptedFiles[0]
    this.props.onChange('xlinkHref', file)
  }

  render() {
    const { object } = this.props
    return (
      <PropertyGroup object={object} showIf={_.has(object, 'xlinkHref')}>
        <Columns label="Image">
          <Column>
            <Dropzone
              accept="image/*"
              onDrop={this.onDrop.bind(this)}
              multiple={false}
              style={{
                float: 'left',
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
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drop new file</p>
                </div>
              )}
            </Dropzone>
          </Column>
        </Columns>
      </PropertyGroup>
    )
  }
}
