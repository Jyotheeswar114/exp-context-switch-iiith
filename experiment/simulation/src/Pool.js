import React, { Component } from 'react';
import Process from './Process.js'

class Pool extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    // console.log(this.props.processes);
    console.log(this.props.processes.forEach(element => element));
    return (
      <div>
        <h4 className='pool_head'>{this.props.name}</h4>
        <div className='pool_body'>
            <p>hello</p>
            {this.props.processes.forEach(element => {
                <div>
                <Process pid={element} />
                <p>Eswar</p>
                </div>
            })}
        </div>
      </div>
    )
  }
}
export default Pool;