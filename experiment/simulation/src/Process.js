import React, { Component } from 'react'

class Process extends Component {
    constructor(props){
        super(props);
    }
  render() {
    console.log(this.props.pid);
    return (
      <p className='process'>{this.props.pid}</p>
    )
  }
}

export default Process;