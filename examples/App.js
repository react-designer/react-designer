import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Rect, Vector, Text} from '../src/objects';
import classes from './App.module'

import MondrianExample from './components/Mondrian';
import MalevichExample from './components/Malevich';
import SwissStyleExample from './components/SwissStyle';
import MockupDesignerExample from './components/MockupDesigner';
import TshirtDesignerExample from './components/TshirtDesigner';


export default class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.landing}>
          <h1>react-designer</h1>
          <h2>Easy to configure, lightweight, editable vector graphics in your react components.</h2>
          <ul className={classes.nav}>
            <li className={classes.current}><a href="#">usage</a></li>
            <li><a href="#examples">examples</a></li>
            <li><a href="http://github.com/fatiherikli/react-designer">docs</a></li>
            <li><a href="http://github.com/fatiherikli/react-designer">show on github</a></li>
          </ul>
        </div>
        <div className={classes.usage}>
          <h4 className={classes.mainTitle}>Usage</h4>
          <p>Give your objects and object types, then listen the changes. We used builtin 
          object types in this example.</p>
          <pre className={classes.code}>{`
import Designer, {Text, Rectangle} from 'react-designer';

class App() {
  state = {
    objects: [
      {type: "text", x: 10, y: 20, text: "Hello!", fill: "red"},
      {type: "rect", x: 50, y: 70, fill: "red"}
    ]
  }

  render() {
    return (
      <Designer width={250} height={350}
        objectTypes={{
          'text': Text,
          'rect': Rect
        }}
        onUpdate={(objects) => this.setState({objects})}
        objects={this.state.objects} />
    )
  }
}
          `}</pre>
        </div>
        <h4 id="examples" className={classes.mainTitle}>Examples</h4>
        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mondrian</h3>
            <p>Default configuration with initial rectangle objects set on the internal state of
            container component.</p>
            <p>Enabled all default drawing tool set and panels.</p>
            <p>
              <a href="https://github.com/fatiherikli/react-deisnger/tree/master/examples/components/">Show example on github</a>
            </p>
          </div>
          <div className={classes.preview}>
            <MondrianExample />
          </div>
        </div>

        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Malevich</h3>
            <p>Default configuration with initial shapes (bezier curves) set on the internal state of
              container component.</p>

            <p>You can double-click to edit shapes.</p>
            <p>
              <a href="https://github.com/fatiherikli/react-deisnger/tree/master/examples/components/">Show example on github</a>
            </p>
          </div>
          <div className={classes.preview}>
            <MalevichExample />
          </div>
        </div>

        <div className={classes.example}>
          <div className={classes.info}>
            <h3>The Swiss Style</h3>
            <p>Default configuration with initial text and shapes with blending modes on the internal state of
              container component.</p>

            <p>
              <a href="https://github.com/fatiherikli/react-deisnger/tree/master/examples/components/">Show example on github</a>
            </p>
          </div>
          <div className={classes.preview}>
            <SwissStyleExample />
          </div>
        </div>

        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mockup Designer</h3>
            <p>An extended toolset for very simple mockup designing tool. All of the toolset are
              pure react components.</p>

            <p>Custom components on this demo:</p>
            <ul>
              <li><a href="#">Button</a></li>
              <li><a href="#">Input</a></li>
              <li><a href="#">H1</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Fieldset</a></li>
            </ul>

            <p>You can extend builtin components, or write entirely different objects</p>

            <p>
              <a href="https://github.com/fatiherikli/react-deisnger/tree/master/examples/components/">Show example on github</a>
            </p>
          </div>
          <div className={classes.preview}>
            <MockupDesignerExample />
          </div>
        </div>

        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Tshirt Designer</h3>
            <p>Default toolset with customized designer canvas for building simple tshirt design tool.</p>

            <p>Price calculation is a simple pure function that receives object list and returns total price.</p>

            <p>In this demo, price is relative to covered areas of objects on the canvas.
              For example price is instantly changing while you resizing objects or typing a text.</p>

            <p>
              <a href="https://github.com/fatiherikli/react-deisnger/tree/master/examples/components/">Show example on github</a> <br />
              <a href="https://github.com/fatiherikli/react-deisnger/tree/master/examples/components/">Show calculatePrice() function</a>
            </p>
          </div>
          <div className={classes.preview}>
            <TshirtDesignerExample />
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.footerLeft}>
            <a href="http://fatiherikli.com">Fatih Erikli</a>, 2016 <br />
            MIT Licensed
          </div>
          <div className={classes.footerRight}>
            Ask me anything: <a href="https://twitter.com/fthrkl">@fthrkl</a>
          </div>
        </div>
      </div>
    );
  }
}
