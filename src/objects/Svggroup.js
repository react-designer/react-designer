import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import Vector from './Vector';


export default class Svggroup extends Vector {
    static meta = {
        icon: <center style={{color: "gray"}}>SVG</center>,
        initial: {
            width: 360,
            height: 360,
            rotate: 0,
            blendMode: "normal",
            viewBoxWidth: 0,
            viewBoxHeight: 0,
        }
    };

    static get DEPRECATED_ATTRS (){
        return ['index', 'svgGroup', 'blendMode', 'viewBoxHeight', 'viewBoxWidth'];
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
                            viewBox={domNode.attribs.viewBox}
                            preserveAspectRatio="none meet"
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
            <g
                {...attrs}
                style={{
                    'mixBlendMode': object.blendMode
                }}
            >
                {svgElement}
            </g>
        )
    }
}