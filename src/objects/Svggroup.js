import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import Vector from './Vector';


export default class Svggroup extends Vector {
    static meta = {
        icon: <center style={{color: "gray"}}>Svg</center>,
        initial: {
            width: 200,
            height: 200,
            rotate: 0,
            fill: "yellow",
            strokeWidth: 0,
            blendMode: "normal"
        }
    };

    static get DEPRECATED_ATTRS (){
        return ['index', 'blendMode', 'svgGroup'];
    }

    updateState(state, item) {
        return Object.assign({}, state, {[item.id]: item});
    }

    render() {
        let {object, index} = this.props,
            attrs = this.getObjectAttributes();

        const options = {
            replace: (domNode) => {
                if (domNode.name === 'svg') {
                    return (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            {...attrs}
                            viewBox={`0 0 ${attrs.width} ${attrs.height}`}
                        >
                            {domToReact(domNode.children, options)}
                        </svg>
                    );
                } else {
                    return
                }
            }
        };

        let svgElement = Parser(object.svgGroup, options);

        return (
            <g {...attrs}>
                {svgElement}
            </g>
        )
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