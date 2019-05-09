import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

function ScaleAnchor(props) {
  let {boundingBox} = props;
  let style = {
    marginTop: boundingBox.height + 5,
    marginLeft: boundingBox.width + 5
  };
  let [anchorHovered, setAnchorHovered] = useState(false);
  return (
    <div style={{...styles.anchor,
                 ...anchorHovered ? styles.anchorHovered : {},
                 ...styles.scaleAnchor,
                 ...style}}
         className={'resize-anchor'}
         onMouseOver={() => setAnchorHovered(true)}
         onMouseOut={() => setAnchorHovered(false)}
         onMouseDown={props.onMouseDown} />
  );
};

function RotateAnchor(props) {
  let style = {
    marginLeft: props.boundingBox.width + 5
  };
  let [anchorHovered, setAnchorHovered] = useState(false);
  return (
    <div style={{...styles.anchor,
                 ...anchorHovered ? styles.anchorHovered : {},
                 ...styles.rotateAnchor,
                 ...style}}
         className={'rotate-anchor'}
         onMouseOver={() => setAnchorHovered(true)}
         onMouseOut={() => setAnchorHovered(false)}
         onMouseDown={props.onMouseDown} />
  )
};

class Handler extends Component {
  onMouseDown(event) {
    // event.preventDefault();

    if (event.target.classList.contains('handler')) {
      this.props.onDrag(event);
    }
  }

  render() {
    let {props} = this;
    let {boundingBox} = props;

    let handlerStyle = {
      ...styles.handler,
      ...boundingBox,
      width: boundingBox.width + 10,
      height: boundingBox.height + 10,
      left: boundingBox.left - 5,
      top: boundingBox.top - 5,
      transform: `rotate(${boundingBox.rotate}deg)`
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
    'height': 10
  },
  anchorHovered: {
    'borderColor': 'gray'
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
