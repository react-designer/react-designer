import React, { Component } from 'react';
import Designer from '../../src/Designer';
import {ArrangePanel, SizePanel} from '../../src/panels'
import {Rect, Vector, Text} from '../../src/objects/index';


export class H1 extends Text {
  static meta = {
    icon: <center style={{color: "gray"}}>H1</center>,
    initial: {
      ...Text.meta.initial,
      text: "Hello",
      fill: "black",
      fontSize: 20
    }
  };
}

export class _Link extends Text {
  static meta = {
    icon: <center style={{color: "gray"}}>Anc</center>,
    initial: {
      ...Text.meta.initial,
      text: "Hello",
      textDecoration: "underline",
      fill: "blue",
      fontSize: 15
    }
  };
}

export class _Button extends Vector {
  static meta = {
    icon: <center style={{color: "gray"}}>Btn</center>,
    initial: {
      ...Text.meta.initial,
      width: 100,
      height: 30,
      fill: "#b9b9b9",
      stroke: "#646464",
      strokeWidth: 2,
      radius: 5,
      text: "Button"
    }
  };

  render() {
    let {object} = this.props;
    let style = {
      dominantBaseline: 'central',
      textAnchor: 'middle',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration
    };
    return (
      <g>
        <rect style={this.getStyle()}
          {...this.getObjectAttributes()}
              rx={object.radius}
              width={object.width}
              height={object.height}/>
        <text fill={"black"} style={style}
              fontSize={object.fontSize}
              fontFamily={object.fontFamily}
              x={object.x + object.width / 2}
              y={object.y + object.height / 2}>{object.text}</text>
      </g>
    );
  }
}

export class _Input extends Vector {
  static meta = {
    icon: <center style={{color: "gray"}}>Inp</center>,
    initial: {
      ...Text.meta.initial,
      width: 100,
      height: 40,
      fill: "#fff",
      stroke: "#646464",
      strokeWidth: 2,
      radius: 0,
      text: 'Label'
    }
  };

  render() {
    let {object, index} = this.props;
    let style = {
      dominantBaseline: 'central',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration
    };
    return (
      <g>
        <text fill={"black"} x={object.x} y={object.y}
              style={style} textAnchor="left" fontSize={object.fontSize}
              fontFamily={object.fontFamily}>{object.text}</text>
        <rect style={this.getStyle()}
          {...this.getObjectAttributes()}
              y={object.y + 10}
              rx={object.radius}
              width={object.width}
              height={object.height - 10}/>
      </g>
    );
  }
}


export class Fieldset extends Vector {
  static meta = {
    icon: <center style={{color: "gray"}}>Fst</center>,
    initial: {
      ...Text.meta.initial,
      width: 250,
      height: 100,
      strokeWidth: 2,
      fill: "#e3e3e3",
      stroke: "gray",
      radius: 0
    }
  };

  render() {
    let {object} = this.props;

    let textStyle = {
      dominantBaseline: 'central',
      textAnchor: 'left',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration
    };

    return (
      <g>
        <rect style={this.getStyle()}
          {...this.getObjectAttributes()}
              rx={object.radius}
              width={object.width}
              height={object.height}/>

        <rect
          width={Math.max(object.text.length * 12.5, 30)}
          height={30} stroke={object.stroke}
          strokeWidth={object.strokeWidth}
          x={object.x + 15} y={object.y - 15}
          fill={object.fill}/>

        <text fill={"black"}
              x={object.x + 25}
              y={object.y }
              fontFamily={object.fontFamily}
              style={textStyle}>{object.text}</text>
      </g>
    );
  }
}


export default class extends Component {
  state = {
    objects: [{
      "width": 270,
      "height": 305,
      "strokeWidth": 2,
      "fill": "#e3e3e3",
      "stroke": "gray",
      "radius": 0,
      "blendMode": "normal",
      "text": "Login",
      "type": "fieldset",
      "fontFamily": "Open Sans",
      "x": 40,
      "y": 55
    }, {
      "width": 215,
      "height": 40,
      "rotate": 0,
      "fill": "#fff",
      "stroke": "#646464",
      "strokeWidth": 2,
      "radius": 0,
      "text": "Username",
      "type": "input",
      "fontFamily": "Open Sans",
      "x": 65,
      "y": 105
    }, {
      "width": 215,
      "height": "40",
      "rotate": 0,
      "fill": "#fff",
      "stroke": "#646464",
      "strokeWidth": 2,
      "radius": 0,
      "text": "Password",
      "type": "input",
      "fontFamily": "Open Sans",
      "x": 65,
      "y": 175
    }, {
      "width": 90,
      "height": 30,
      "rotate": 0,
      "fill": "#b9b9b9",
      "stroke": "#646464",
      "strokeWidth": 2,
      "radius": 5,
      "text": "Login",
      "fontWeight": "normal",
      "type": "button",
      "fontFamily": "Open Sans",
      "x": 65,
      "y": 240
    }, {
      "text": "Forgot your password?",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "underline",
      "fill": "blue",
      "fontSize": 15,
      "fontFamily": "Open Sans",
      "type": "link",
      "x": 145,
      "y": 300
    }, {
      "text": "Register",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "underline",
      "fill": "blue",
      "fontSize": 15,
      "fontFamily": "Open Sans",
      "type": "link",
      "x": 95,
      "y": 330
    }]
  };

  download(event) {
    event.preventDefault();
    let svgElement = this.designer.svgElement;

    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    let source = svgElement.outerHTML;
    let uri = 'data:image/svg+xml;base64,' + btoa(source);

    window.open(uri)
  }

  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <div>
        <Designer
          ref={(ref) => this.designer = ref}
          width={350}
          height={400}
          snapToGrid={5}
          objectTypes={{
            'button': _Button,
            'input': _Input,
            'h1': H1,
            'link': _Link,
            'fieldset': Fieldset
          }}
          objects={this.state.objects}
          onUpdate={this.handleUpdate.bind(this)}/>
        <p>
          <a href="#" onClick={this.download.bind(this)}>Export SVG</a>
        </p>
      </div>
    );
  }
}
