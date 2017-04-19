import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import Icon from './Icon';
import { toCSS, rotateDEG, transform, translate } from 'transformation-matrix';


function ScaleAnchor(props) {
  let {boundingBox} = props;
  let style = {
    marginTop: boundingBox.height - 4,
    marginLeft: boundingBox.width - 4
  };
  return (
    <div style={[styles.anchor, 
                 styles.scaleAnchor,
                 style]}
         className={'resize-anchor'}
         onMouseDown={props.onMouseDown} />
  );
};

ScaleAnchor = Radium(ScaleAnchor);

function RotateAnchor(props) {
  let style = {
    marginLeft: props.boundingBox.width - 3
  };
  return (
    <div style={[styles.anchor,
                 styles.rotateAnchor, 
                 style]}
         className={'rotate-anchor'}
         onMouseDown={props.onMouseDown} />
  )
};

RotateAnchor = Radium(RotateAnchor);

class Handler extends Component {
  onMouseDown(event) {
    // event.preventDefault();

    if (event.target.classList.contains('handler')) {
      this.props.onDrag(event);
    }   
  }

  render() {
    let {props} = this;
    let {boundingBox, value} = props;

    // console.log('**', value)

      // value.a = 0;

      // TODO: fixed error

    value = transform(
        value,
        // translate(TODO: ????),
        rotateDEG(boundingBox.rotate)
    );

    // console.log('*****', boundingBox);

    let handlerStyle = {
      ...styles.handler,
      ...boundingBox,
      left: boundingBox.left - 2 ,
      top: boundingBox.top - 2,
      // transform: `rotate(${boundingBox.rotate}deg)`
      transform: toCSS(value)
    };

    return (
      <div className={'handler'} 
        style={handlerStyle}
        onMouseLeave={props.onMouseLeave}
        onDoubleClick={props.onDoubleClick}
        onMouseDown={this.onMouseDown.bind(this)}>
          {props.canRotate &&
            <RotateAnchor onMouseDown={props.onRotate} 
                          boundingBox={boundingBox} />}
          {props.canResize && 
            <ScaleAnchor onMouseDown={props.onResize}
                         boundingBox={boundingBox} />}
      </div>
    );
  }
}

const styles = {
  handler: {
    'position': 'absolute',
    'border': '2px solid #dedede',
    'zIndex': 999999
  },
  anchor: {
    'width': 10, 
    'height': 10,
    ':hover': {
      'borderColor': 'gray'
    }
  },
  scaleAnchor: {
    'marginTop': -3,
    'borderRight': '2px solid #dedede',
    'borderBottom': '2px solid #dedede',
    'position': 'absolute',
    'zIndex': -1
  },
  rotateAnchor: {
    'marginTop': -8,
    'borderRight': '2px solid #dedede',
    'borderTop': '2px solid #dedede',
    'position': 'absolute',
    'borderTopRightRadius': 3,
    'zIndex': -1
  }
};

export default Handler;
