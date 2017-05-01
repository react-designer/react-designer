import React, { Component } from 'react';
import Designer from '../../src/Designer';
import Preview from '../../src/Preview';


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
        }],
        importObj: ''
    };

    handleUpdate(objects) {
        this.setState({objects});
    }

    download(event) {
        event.preventDefault();
        let svgElement = this.designer.svgElement;
        svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        let source = svgElement.outerHTML,
            svg = source.replace(/[&]nbsp[;]/gi, " "),
            uri = 'data:image/svg+xml;base64,' + btoa(svg);
        window.open(uri)
    }

    exportObj() {
        event.preventDefault();
        let svgObg = JSON.stringify(this.designer.props.objects);
        svgObg = svgObg.replace(/</g, '&lt;');
        svgObg = svgObg.replace(/>/g, '&gt;');
        let newWin = window.open("", "", "width=200,height=200");
        newWin.document.write(svgObg);
    }

    openDesigner() {
        let impObj = JSON.parse(this.state.importObj);
        this.setState({
            objects: impObj
        })
    }

    render() {
        return (
            <div>

                <Preview
                    width={500}
                    height={500}
                    objects={this.state.objects}
                />

                <textarea
                    style={{
                        width: 500,
                        height: 500
                    }}
                    value={this.state.importObj}
                    onChange={e => {
                        this.setState({
                            importObj: e.target.value
                        })
                    }}
                >

                </textarea>
                <p>
                    <a href="#" onClick={this.openDesigner.bind(this)}>Import Svg</a>
                </p>
                <p>
                    <a href="#" onClick={this.download.bind(this)}>Export SVG</a>
                </p>
                <p>
                    <a href="#" onClick={this.exportObj.bind(this)}>Export Objects</a>
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