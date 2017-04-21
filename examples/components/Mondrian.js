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
    }, {
      "width": 70,
      "height": 146,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 255, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 19,
      "y": 109
    }, {
      "width": 81,
      "height": 69,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 100,
      "y": 110
    }, {
      "width": 231,
      "height": 70,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(0, 123, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 100,
      "y": 187
    }, {
      "width": 183,
      "height": 60,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 241, 0, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 19,
      "y": 265
    }, {
      "width": 118,
      "height": 119,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 211,
      "y": 266
    }, {
      "width": 82,
      "height": 51,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 255, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 120,
      "y": 333
    }, {
      "width": 89,
      "height": 50,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(241, 97, 99, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 21,
      "y": 334
    }, {
      "width": 143,
      "height": 160,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(255, 241, 0, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 190,
      "y": 16
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
              svgBackground={<g><g><path d="M38.3,115.4L38.3,115.4c0.6,1.3,1.2,1.8,1.2,1.8l0.4-0.4l250.9,240V990h674.7V48.4H290.7v110L137.4,11.8l-0.8,0.8c-5.1-1.9-33.8-12.5-73.7,29.3C23,83.6,36.2,110.4,38.3,115.4L38.3,115.4z M737.6,703.4h144.1v203H737.6V703.4z M737.6,322.5h39.8h20.8h56.5h23.1h3.9v364.1H737.6V322.5z M737.6,132.1h23v173.7h-23V132.1z M814.9,132.1h23v173.7h-23V132.1z M881.8,305.8h-3.9h-23.1V132.1h27.1V305.8z M798.2,305.8h-20.8V132.1h20.8V305.8z M720.9,305.8H700V132.1h20.9V305.8z M660.2,132.1h23v173.7h-23V132.1z M374.4,132.1h269.1v173.7h-87.9v16.7h87.9H700h20.9v364.1v16.7v203H610v-38.8h-33.5v38.8H374.4V594.5h26.4v-33.5h-26.4V436.9l15.1,14.5c3.7-18.5,17.2-41.3,34.3-60.8c20.6-23.6,44.4-40.4,62.6-45L374.4,238.5L374.4,132.1L374.4,132.1z"/><path d="M431,395.5c-23.6,27.4-32.6,51-33,62.9c-0.1,3.6,8,8.2,9.4,8.2c0,0,0.1,0,0.1,0l19.2,2.3l14.3,1.7l65.2,7.8c0,0,0-0.1,0-0.1c-0.4-4.9,1.8-10.5,6.1-15.6c2.1-2.4,7.5-7.8,14.3-8.3L507.9,391l-4-13.7l-5-17.1c0.3-3.8-4-8.6-5.2-8.6C481.6,351.6,455.5,367,431,395.5z M484.8,371.7l3,10.3l4,13.7l14.5,49.6c-3.2,2.5-5.6,5-6.9,6.6c-2.2,2.6-4.1,5.4-5.6,8.2l-50.9-6.1l-14.3-1.7l-12.2-1.5c3.3-10.3,11.7-26.3,27.2-44.4C460.2,387.2,475.4,376.6,484.8,371.7z"/><path d="M517,478.6c0.1,0.1,0.1,0.3,0.2,0.4l15.1,12.6c1,0.8,4.5,2,7.9,2c2.3,0,4.5-0.5,5.7-2c3.2-3.7-0.5-11.9-2.2-13.3l-15.1-12.6c-0.4-0.3-0.8-0.4-1.4-0.4c-0.1,0-0.2,0-0.3,0.1c-1.9,0.2-4.7,1.9-7,4.6C517.1,473.4,515.9,477.1,517,478.6z"/><polygon points="576.5,614.5 610,614.5 610,561.1 553.3,561.1 553.3,594.5 576.5,594.5 "/><rect x="452.9" y="561.1" width="48.3" height="33.5"/><rect x="576.5" y="666.6" width="33.5" height="48.3"/><rect x="576.5" y="767.1" width="33.5" height="48.3"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>}
          />
        </div>
    );
  }
}