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
          <p>You should provide your objects and object types. The objects might be empty array if you want to create a
          blank canvas.</p>
          <pre className={classes.code}>{`
import Designer, {Text, Rect} from 'react-designer';

class App() {
  state = {
    objects: [
      {type: "text", x: 10, y: 20, text: "Hello!", fill: "red"},
      {type: "rect", x: 50, y: 70, width: 30, height: 40, fill: "red"}
    ]
  };

  render() {
    return (
      <Designer width={500} height={500}
        objectTypes={{
          'text': Text,
          'rect': Rect
        }}
        onUpdate={(objects) => this.setState({objects})}
        objects={this.state.objects} />
    )
  }
}
          `.trim()}</pre>
          You should listen onUpdate callback to update your objects. React-designer will invoke this
          callback in every update.
        </div>
        <h4 id="examples" className={classes.mainTitle}>Examples</h4>
        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mondrian</h3>
            <p>Default configuration with initial rectangle objects set on the internal state of
            container component.</p>
            <p>Enabled all default drawing tool set and panels.</p>
            <p>
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/Mondrian.js">Show example on github</a>
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
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/Malevich.js">Show example on github</a>
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
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/SwissStyle.js">Show example on github</a>
            </p>
          </div>
          <div className={classes.preview}>
            <SwissStyleExample />
          </div>
        </div>

        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mockup Designer</h3>
            <p>An extended toolset for very simple mockup designing tool.</p>

            <p>Custom components on this demo:</p>
            <ul>
              <li><a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/MockupDesigner.js#L32">Button</a></li>
              <li><a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/MockupDesigner.js#L73">Input</a></li>
              <li><a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/MockupDesigner.js#L7">H1</a></li>
              <li><a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/MockupDesigner.js#L19">Link</a></li>
              <li><a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/MockupDesigner.js#L113">Fieldset</a></li>
            </ul>

            <p>These components are derived from Vector, but they are still pure React components.</p>

            <p>
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/MockupDesigner.js">Show example on github</a>
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
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/TshirtDesigner.js">Show example on github</a> <br />
            </p>
          </div>
          <div className={classes.preview} style={{marginBottom: 40}}>
            <TshirtDesignerExample />
          </div>
          <p className={classes.info} style={{
            clear: "left",
            marginTop: -40
          }}>
          Here is price calculation logic:
          </p>
          <pre className={classes.code} style={{
              paddingTop: 10,
              paddingBottom: 10
          }}>{`
const priceMap = {
  'text': ({text, fontSize}) => text.length * fontSize * 0.01,
  'rectangle': ({width, height}) => width * height * 0.001,
  'circle': ({width, height}) => width * (height || width) * 0.001
};

const calculatePrice = (objects, initialCost = 5) => (
  objects.map(
    ({type, ...rest}) => priceMap[type](rest)
  ).reduce(
    (a, b) => a + b,
    initialCost
  )
);
          `}</pre>
          <p className={classes.info}>
          We are calling this function in our `handleUpdate` method.
          </p>
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
