import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Svggroup extends Vector {
    static meta = {
        icon: <center style={{color: "gray"}}>Svg</center>,
        initial: {
            width: 5,
            height: 5,
            rotate: 0,
            fill: "yellow",
            strokeWidth: 0,
            blendMode: "normal"
        }
    };

    static get DEPRECATED_ATTRS (){
        return ['index', 'blendMode'];
    }

    render() {
        let {object, index} = this.props;
        return (
            <g
                {...this.getObjectAttributes()}
            >
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            </g>
        );
    }
}

/*

<ellipse style={this.getStyle()}
         {...this.getObjectAttributes()}
         rx={object.width / 2}
         ry={object.height / 2}
         cx={object.x + object.width / 2}
         cy={object.y + object.height / 2} />

*/