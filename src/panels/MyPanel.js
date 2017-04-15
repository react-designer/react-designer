import React, {Component} from 'react';
import Radium from 'radium';
import _ from 'lodash';

import styles from './styles';
import Icon from '../Icon';
import Panel from './Panel';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import SwitchState from './SwitchState';
import Columns from './Columns';
import Column from './Column';

export default class MyPanel extends Panel {
    render() {
        let { object, onChange } = this.props;
        return (
            <PropertyGroup>
                <Columns label="Attr">
                    <Column value={object.id}
                            label="id"
                            onChange={key => onChange('id', key)} />
                    <Column value={object.className}
                            label="class"
                            onChange={key =>  onChange('className', key)} />
                </Columns>
            </PropertyGroup>
        );
    }
}