import React, { Component } from 'react';
import Designer from '../../src/Designer';
import { ReactSVGPanZoom } from 'react-svg-pan-zoom';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';


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

        const options = {
            replace: (domNode) => {
                if (domNode.name === 'g' && typeof domNode.attribs['data-info'] != "undefined") {
                    return <g
                        onClick={() => alert(domNode.attribs['data-info'])}
                    >
                        {domToReact(domNode.children, options)}
                    </g>
                } else {
                    return domNode
                }
            }
        };

        let svgElement = Parser(`<svg width="1800" height="1800" data-radium="true" style="background-size: 400px; background-color: transparent; margin-top: 0px; margin-left: 0px;" xmlns="http://www.w3.org/2000/svg"><g width="267" height="232" rotate="0" opacity="1" type="svgGroup" x="17" y="19" style="mix-blend-mode: normal;" data-info="Квартира 1"><svg xmlns="http://www.w3.org/2000/svg" width="267" height="232" rotate="0" opacity="1" type="svgGroup" x="17" y="19" viewBox="0 0 267 232.3" preserveAspectRatio="none meet" data-info="qdssdsd"><defs><style>.a{fill:#4b704b;}</style></defs><title>Ð ÐµÑÑƒÑ€Ñ 2</title><polygon class="a" points="267 159.1 267 0 94.5 0 94.5 0.9 89.5 0.9 89.5 0 62.9 0 62.9 2.6 6.5 2.6 6.5 0 0 0 0 50.3 89.5 50.3 89.5 49.4 94.5 49.4 94.5 50.3 95.4 50.3 95.4 68.9 52 68.9 52 159.1 155.6 159.1 155.6 164.7 129.6 164.7 129.6 232.3 267 232.3 267 164.7 197.7 164.7 197.7 159.1 267 159.1"></polygon><path class="a" d="M85.8,164.7v33.8H52v33.8h3.2v-8l.1-1.3.3-1.3.6-1.2.8-1.1.9-.9,1.1-.7,2.6-1.2,2.7-.7,2.8-.2,2.8.2,2.7.7,2.6,1.2,1.1.7.9.9.8,1.1.6,1.2.3,1.3.1,1.3v8H98.9a12.12,12.12,0,0,1-1.3-5.6v-.5a2.42,2.42,0,0,1,2.7-1.8l-1-9.2a12.4,12.4,0,0,1,1.3-7.1h0a7.52,7.52,0,0,1,3.3-3.3,7.22,7.22,0,0,1,9.7,3.3h-.1c0,.1,0-.1.1,0a13.46,13.46,0,0,1,1.3,7.1h0l-1,9.2h.5a2.26,2.26,0,0,1,2.3,2.3,13.16,13.16,0,0,1-1.3,5.6h8.7V205.9h7.7c0-2.8,2.5-41.9.6-40.2a24.27,24.27,0,0,1-4.1-.2H124v-.9C124,164.7,98.6,164.7,85.8,164.7Z"></path></svg></g></svg>`, options);

        return (
            <div>

                <ReactSVGPanZoom
                    style={{outline: "1px solid black"}}
                    width={500}
                    height={500}
                >
                    <svg width={1500} height={1000}>
                        { svgElement }
                    </svg>
                </ReactSVGPanZoom>


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