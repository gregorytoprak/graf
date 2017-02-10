import React, { Component } from 'react'

class Node extends Component {
  state = {}

  handleClick = (e) => {
    if (e.shiftKey) {
      this.props.deleteNode(this.props.id)
    }
  }

  // handleDrag = (e) => {
  //   console.log(e)
  // }

  render () {
    return (
      <circle id={this.props.id} cx={this.props.x} cy={this.props.y}
        onClick={this.handleClick}
        // onDrag={this.handleDrag}
        fill='black' r='1'
      />
    )
  }
}

export default Node
