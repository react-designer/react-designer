import React, {Component} from 'react';
import Radium from 'radium';
import SVGRenderer from './SVGRenderer';

import {Text, Path, Rect, Circle} from './objects';
import { ReactSVGPanZoom } from 'react-svg-pan-zoom';


class Preview extends Component {
  static defaultProps = {
    objectTypes: {
      'text': Text,
      'rectangle': Rect,
      'circle': Circle,
      'polygon': Path
    }
  };

  componentWillMount() {
    this.objectRefs = {};
  }

  render() {
    let {width, height, objects, objectTypes} = this.props;

    let style = {
      ...styles.container,
      ...this.props.style,
      width: width,
      height: height
   };

   let canvas = {
      width, 
      height, 
      canvasWidth: width, 
      canvasHeight: height
   };

    return (
        <ReactSVGPanZoom
            style={{outline: "1px solid black"}}
            width={width}
            height={height}
        >
            <svg width={width} height={height}>
                <SVGRenderer
                    width={width}
                    height={height}
                    objects={objects}
                    objectRefs={this.objectRefs}
                    objectTypes={objectTypes}
                    canvas={canvas} />
            </svg>
        </ReactSVGPanZoom>
    );
  }
}

const styles = {
  container: {
    position: "relative"
  }
};

export default Radium(Preview);