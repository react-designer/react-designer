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
                <Columns label="Custom">
                    <Button onClick={() => {
                        let cAttr = prompt('Name of custom attr');
                        if (cAttr) {
                            cAttr = 'data-x-'+cAttr;
                            onChange(cAttr, '')
                        }
                    }}>
                        <span>+ add custom attr</span>
                    </Button>
                    {
                        Object.keys(object).map(key => {
                            if (key.indexOf('data-x-') != -1) {
                                return <Column
                                            key={key}
                                            value={object[key]}
                                            label={key}
                                            onChange={val =>  onChange(key, val)}
                                />
                            }
                            else {
                                return null
                            }
                        })
                    }

                </Columns>
            </PropertyGroup>
        );
    }
}