import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Rect, Vector, Text} from '../src/objects';
import classes from './App.module'

import MondrianExample from './components/Mondrian';


export default class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.landing}>
          <h1>react-designer</h1>
        </div>

        <h4 id="examples" className={classes.mainTitle}>Examples</h4>
        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mondrian</h3>
          </div>
          <div className={classes.preview}>
            <MondrianExample />
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
