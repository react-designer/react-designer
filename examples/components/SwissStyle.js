import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
      "fill": "rgba(255, 57, 57, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 20,
      "moveY": 126,
      "path": [{"x1": 20, "y1": 126, "x2": 145, "y2": 123.84375, "x": 145, "y": 123.84375}, {
        "x1": 145,
        "y1": 123.84375,
        "x2": 144,
        "y2": 180.84375,
        "x": 144,
        "y": 180.84375
      }, {"x1": 144, "y1": 180.84375, "x2": 249, "y2": 179.84375, "x": 249, "y": 179.84375}, {
        "x1": 249,
        "y1": 179.84375,
        "x2": 249,
        "y2": 269.84375,
        "x": 249,
        "y": 269.84375
      }, {"x1": 249, "y1": 269.84375, "x2": 161, "y2": 272.84375, "x": 161, "y": 272.84375}, {
        "x1": 161,
        "y1": 272.84375,
        "x2": 161,
        "y2": 305.84375,
        "x": 161,
        "y": 305.84375
      }, {"x1": 161, "y1": 305.84375, "x2": 248, "y2": 305.84375, "x": 248, "y": 305.84375}, {
        "x1": 248,
        "y1": 305.84375,
        "x2": 248,
        "y2": 382.84375,
        "x": 248,
        "y": 382.84375
      }, {"x1": 248, "y1": 382.84375, "x2": 19, "y2": 382.84375, "x": 19, "y": 382.84375}, {
        "x1": 19,
        "y1": 382.84375,
        "x2": 20,
        "y2": 126,
        "x": 20,
        "y": 126
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "type": "polygon",
      "x": 20,
      "y": 126,
      "blendMode": "multiply"
    }, {
      "fill": "rgba(74, 255, 231, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 21,
      "moveY": 126,
      "path": [{"x1": 21, "y1": 126, "x2": 144, "y2": 125.84375, "x": 144, "y": 125.84375}, {
        "x1": 144,
        "y1": 125.84375,
        "x2": 144,
        "y2": 176.84375,
        "x": 144,
        "y": 176.84375
      }, {"x1": 144, "y1": 176.84375, "x2": 252, "y2": 177.84375, "x": 252, "y": 177.84375}, {
        "x1": 252,
        "y1": 177.84375,
        "x2": 250,
        "y2": 271.84375,
        "x": 250,
        "y": 271.84375
      }, {"x1": 250, "y1": 271.84375, "x2": 163, "y2": 275.84375, "x": 163, "y": 275.84375}, {
        "x1": 163,
        "y1": 275.84375,
        "x2": 162,
        "y2": 303.84375,
        "x": 162,
        "y": 303.84375
      }, {"x1": 162, "y1": 303.84375, "x2": 246, "y2": 303.84375, "x": 246, "y": 303.84375}, {
        "x1": 246,
        "y1": 303.84375,
        "x2": 246,
        "y2": 384.84375,
        "x": 246,
        "y": 384.84375
      }, {"x1": 246, "y1": 384.84375, "x2": 19, "y2": 382.84375, "x": 19, "y": 382.84375}, {
        "x1": 19,
        "y1": 382.84375,
        "x2": 21,
        "y2": 126,
        "x": 21,
        "y": 126
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "type": "polygon",
      "x": 33,
      "y": 117,
      "blendMode": "darken"
    }, {
      "text": "love",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "none",
      "fill": "rgba(249, 249, 138, 1)",
      "fontSize": "90",
      "fontFamily": "Helvetica",
      "type": "text",
      "x": 117,
      "y": 220,
      "blendMode": "normal"
    }, {
      "text": "not",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "none",
      "fill": "rgba(247, 247, 109, 1)",
      "fontSize": "50",
      "fontFamily": "Helvetica",
      "type": "text",
      "x": 79,
      "y": 281,
      "blendMode": "normal"
    }, {
      "text": "war",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "none",
      "fill": "rgba(255, 255, 121, 1)",
      "fontSize": "90",
      "fontFamily": "Helvetica",
      "type": "text",
      "x": 117,
      "y": 334,
      "blendMode": "normal"
    }, {
      "text": "make",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "none",
      "fill": "rgba(255, 255, 117, 1)",
      "fontSize": "40",
      "fontFamily": "Helvetica",
      "type": "text",
      "x": 87,
      "y": 159,
      "blendMode": "normal"
    }, {
      "fill": "rgba(255, 236, 54, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 22,
      "moveY": 13,
      "path": [{"x1": 22, "y1": 13, "x2": 24, "y2": 99.84375, "x": 24, "y": 99.84375}, {
        "x1": 24,
        "y1": 99.84375,
        "x2": 161,
        "y2": 101.84375,
        "x": 161,
        "y": 101.84375
      }, {"x1": 161, "y1": 101.84375, "x2": 163, "y2": 155.84375, "x": 163, "y": 155.84375}, {
        "x1": 163,
        "y1": 155.84375,
        "x2": 268,
        "y2": 159.84375,
        "x": 268,
        "y": 159.84375
      }, {"x1": 268, "y1": 159.84375, "x2": 264, "y2": 268.84375, "x": 264, "y": 268.84375}, {
        "x1": 264,
        "y1": 268.84375,
        "x2": 181,
        "y2": 275.84375,
        "x": 181,
        "y": 275.84375
      }, {"x1": 181, "y1": 275.84375, "x2": 181, "y2": 288.84375, "x": 181, "y": 288.84375}, {
        "x1": 181,
        "y1": 288.84375,
        "x2": 264,
        "y2": 286.84375,
        "x": 264,
        "y": 286.84375
      }, {"x1": 264, "y1": 286.84375, "x2": 265, "y2": 377.84375, "x": 265, "y": 377.84375}, {
        "x1": 265,
        "y1": 377.84375,
        "x2": 340,
        "y2": 377.84375,
        "x": 340,
        "y": 377.84375
      }, {"x1": 340, "y1": 377.84375, "x2": 338, "y2": 14.84375, "x": 338, "y": 14.84375}, {
        "x1": 338,
        "y1": 14.84375,
        "x2": 22,
        "y2": 13,
        "x": 22,
        "y": 13
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "type": "polygon",
      "x": 11,
      "y": 15,
      "blendMode": "multiply"
    }, {
      "text": "love",
      "rotate": 0,
      "fontWeight": "bold",
      "fontStyle": "normal",
      "textDecoration": "none",
      "fill": "rgba(26, 236, 255, 1)",
      "fontSize": "90",
      "fontFamily": "Helvetica",
      "type": "text",
      "x": 115,
      "y": 221,
      "blendMode": "multiply"
    }, {
      "text": "war",
      "rotate": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "textDecoration": "none",
      "fill": "red",
      "fontSize": "90",
      "fontFamily": "Helvetica",
      "type": "text",
      "x": 125,
      "y": 333,
      "blendMode": "difference"
    }]
  };

  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <Designer
        width={350} height={400}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}