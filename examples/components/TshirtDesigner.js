import React, {Component} from 'react';
import Designer, {Text, Rect, Circle} from '../../src';
import {styles as canvasStyles} from '../../src/SVGRenderer';

const priceMap = {
  'text': ({text, fontSize}) => text.length * fontSize * 0.01,
  'rectangle': ({width, height}) => width * height * 0.001,
  'circle': ({width, height}) => width * (height || width) * 0.001
};

const calculatePrice = (objects,
                        initialCost = 5) => (
  objects.map(
    ({type, ...rest}) =>
      priceMap[type](rest)
  ).reduce(
    (a, b) => a + b,
    initialCost
  )
);

const Background = ({style}) => (
  <svg width="350" height="400" style={{
    position: "absolute",
    ...canvasStyles.grid
  }}>
    <path d="
        M 75 80
        C 75 80, 137 64.28125, 136 64.28125
        C 135 64.28125, 144 95.28125, 178 98.28125
        C 209 93.28125, 216 65.28125, 216 65.28125
        C 216 65.28125, 276 83.28125, 276 83.28125
        C 276 83.28125, 331 144.28125, 331 144.28125
        C 331 144.28125, 296 185.28125, 296 185.28125
        C 296 185.28125, 277 183.28125, 277 183.28125
        C 277 183.28125, 276 335.28125, 276 335.28125
        C 276 335.28125, 77 335.28125, 77 335.28125
        C 77 335.28125, 74 182.28125, 74 182.28125
        C 74 182.28125, 57 187.28125, 57 187.28125
        C 57 187.28125, 21 142.28125, 21 142.28125
        C 21 142.28125, 75 80, 75 80
        Z" style={style}/>
  </svg>
);

export default class extends Component {

  state = {
    objects: [
      {
        "text": "COME TO THE",
        "rotate": 0,
        "fontWeight": "bold",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "rgba(11, 10, 10, 1)",
        "fontSize": "20",
        "fontFamily": "Inconsolata",
        "type": "text",
        "x": 105,
        "y": 152
      }, {
        "text": "FRONT",
        "rotate": 0,
        "fontWeight": "bold",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "rgba(0, 0, 0, 1)",
        "fontSize": "47",
        "fontFamily": "Alegreya",
        "type": "text",
        "x": 106,
        "y": 184
      }, {
        "text": "END",
        "rotate": 0,
        "fontWeight": "bold",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "rgba(0, 0, 0, 1)",
        "fontSize": "25",
        "fontFamily": "Inconsolata",
        "type": "text",
        "x": 211,
        "y": 219
      }
    ]
  };

  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <div>
        <Background style={{
          fill: "#fff989",
          stroke: "#808080",
          strokeWidth: 2
        }}/>
        <Designer
          width={350} height={400}
          objectTypes={{
            'text': Text,
            'rectangle': Rect,
            'circle': Circle
          }}
          background={"transparent"}
          objects={this.state.objects}
          onUpdate={this.handleUpdate.bind(this)}/>
        <div style={{
          fontWeight: "bold",
          paddingTop: 15,
          fontFamily: "monaco, monospace",
          color: "#494949"
        }}>
          Tshirt Price: {calculatePrice(this.state.objects).toFixed(2)}$
        </div>
      </div>
    );
  }
}
