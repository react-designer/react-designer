import React, { Component } from 'react'
import _ from 'lodash'

import Icon from '../Icon'
import PropertyGroup from './PropertyGroup'
import Button from './Button'
import Columns from './Columns'
import Column from './Column'

export default class ArrangePanel extends Component {
  render() {
    return (
      <PropertyGroup>
        <Columns label="Arrange">
          <Column>
            <Button onClick={this.props.onArrange.bind(this, 'back')}>
              <Icon icon="send-to-back" />
              <span>send to back</span>
            </Button>
            <Button onClick={this.props.onArrange.bind(this, 'front')}>
              <Icon icon="bring-to-front" />
              <span>bring to front</span>
            </Button>
          </Column>
        </Columns>
      </PropertyGroup>
    )
  }
}
