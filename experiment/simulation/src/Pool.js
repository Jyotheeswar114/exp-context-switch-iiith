import React, { Component } from 'react';
import Process from './Process.js'

class Pool extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    let g = [1, 4, 5];
    // console.log(g);
    // // let h = g.map(element => <p>{element}</p>)

    // console.log(this.props.processes.map(element => <p>{element}</p>));
    return (
      <div>
        <h4 className='pool_head'>{this.props.name}</h4>
        <div className='pool_body'>
            <p>hello</p>
            {this.props.processes.map(element => <Process pid={element} />)}
        </div>
      </div>
    )
  }
}
export default Pool;