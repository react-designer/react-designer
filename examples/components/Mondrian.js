import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
      "width": 163,
      "height": 84,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(0, 123, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 17,
      "y": 15
    }]
  };

  handleUpdate(objects) {
    this.setState({objects});
  }

    download(event) {
        event.preventDefault();
        let svgElement = this.designer.svgElement;
        svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        let source = svgElement.outerHTML;
        let uri = 'data:image/svg+xml;base64,' + btoa(source);
        window.open(uri)
    }

  render() {
    return (
        <div>
          <p>
            <a href="#" onClick={this.download.bind(this)}>Export SVG</a>
          </p>
          <Designer
              ref={(ref) => this.designer = ref}
              width={1800}
              height={1800}
              objects={this.state.objects}
              onUpdate={this.handleUpdate.bind(this)}
              zoomWidth={500}
              zoomHeight={500}
              background={"transparent"}
          />
        </div>
    );
  }
}