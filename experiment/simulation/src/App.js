import './App.css';
import Pool from './Pool.js';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Pool name="Hello Akshay" processes={[1, 3, 4]} />
    )
  }
}

