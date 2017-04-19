import React, { Component } from 'react';
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


export default class AttrPanel extends Panel {
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
                <Columns label="Custom">
                    <Button onClick={() => {
                        let cAttr = prompt('Name of custom attr');
                        if (cAttr) {
                            cAttr = 'data-'+cAttr;
                            onChange(cAttr, '')
                        }
                    }}>
                        <span>+ add custom attr</span>
                    </Button>
                </Columns>
                {
                    Object.keys(object).map(key => {
                        if (key.indexOf('data-') != -1 && key != 'data-reactid') {
                            return (
                                <div style={[styles.row, {paddingTop: 5, paddingRight: 10}]}>
                                    <input style={[styles.input, styles.textInput]}
                                           onChange={(e) => onChange(key, e.target.value)}
                                           value={object[key]}
                                           placeholder={key}
                                    />
                                </div>
                            )
                        }
                        else {
                            return (
                                null
                            )
                        }
                    })
                }
            </PropertyGroup>
        );
    }
}