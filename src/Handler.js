import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import Icon from './Icon';


function ScaleAnchor(props) {
  let {boundingBox} = props;
  return (
    <div style={props.style}
         className={'resize-anchor'}
         onMouseDown={props.onMouseDown} />
  );
};

ScaleAnchor = Radium(ScaleAnchor);

function RotateAnchor(props) {
  return (
    <div style={props.style}
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

    let transformHandlerStyle = {
      width: boundingBox.width * value.a,
      height: boundingBox.height * value.d,
      left: boundingBox.left * value.a + value.e,
      top: boundingBox.top * value.d + value.f
    }

    let transformAnchorStyle = {
      width: styles.anchor.width * value.a,
      height: styles.anchor.height * value.d,
    }

    let handlerStyle = {
      ...styles.handler,
      ...boundingBox,
      ...transformHandlerStyle,
      transform: `rotate(${boundingBox.rotate}deg)`
    };

    let scaleAnchorStyle = {
      ...styles.anchor,
      ...styles.scaleAnchor,
      marginTop: (boundingBox.height - 4) * value.d,
      marginLeft: (boundingBox.width - 4) * value.a,
      ...transformAnchorStyle
    };

    let rotateAnchorStyle = {
      ...styles.anchor,
      ...styles.rotateAnchor,
      marginTop: styles.rotateAnchor.marginTop * value.a,
      marginLeft: (props.boundingBox.width - 3) * value.a,
      ...transformAnchorStyle
    };

    return (
      <div className={'handler'} 
        style={handlerStyle}
        onMouseLeave={props.onMouseLeave}
        onDoubleClick={props.onDoubleClick}
        onMouseDown={this.onMouseDown.bind(this)}>
          {props.canRotate &&
            <RotateAnchor style={rotateAnchorStyle}
                          onMouseDown={props.onRotate} 
                          boundingBox={boundingBox} />}
          {props.canResize && 
            <ScaleAnchor style={scaleAnchorStyle}
                         onMouseDown={props.onResize}
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
