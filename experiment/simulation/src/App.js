import './App.css';
import Pool from './Pool.js';

import React, { Component } from 'react'

import * as Constants from './constants';


export default class App extends Component {
  
  render() {
    return (
      <div class="main">
        <div id="events">

        </div>
        <div id="pools">
          <Pool name="Ready Pool" processes={[1, 3, 4, 9, 10]} />
          <Pool name="CPU Pool" processes={[1, 3, 4, 9, 10]} />
          <Pool name="IO Pool" processes={[1, 3, 4, 9, 10]} />
          <Pool name="Completed Pool" processes={[1, 3, 4, 9, 10]} />
        </div>
        <div id="log">

        </div>
      </div>
    )
  }
}

