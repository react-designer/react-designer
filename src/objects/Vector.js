import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import {SizePanel, TextPanel, 
        StylePanel, ArrangePanel, AttrPanel} from '../panels';


export default class Vector extends Component {

    static get DEPRECATED_ATTRS(){
        return []
    };

    static panels = [
        SizePanel,
        TextPanel,
        StylePanel,
        ArrangePanel,
        AttrPanel
    ];

    getStyle() {
        let {object} = this.props;
        return {
            mixBlendMode: object.blendMode
        }
    }

    getTransformMatrix({rotate, x, y, width, height}) {
        if (rotate) {
            let centerX = width / 2 + x;
            let centerY = height / 2 + y;
            return `rotate(${rotate} ${centerX} ${centerY})`;
        }
    }

    getObjectAttributes() {
        let {object, onRender, ...rest} = this.props;
        let result = {
            ...object,
            transform: this.getTransformMatrix(object),
            ref: onRender,
            ...rest
        };
        this.constructor.DEPRECATED_ATTRS.forEach(key => delete result[key]);
        return result;
    }

}