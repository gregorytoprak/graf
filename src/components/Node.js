import React, { Component } from 'react'

class Node extends Component {
  state = {}

  handleClick = (e) => {
    if (e.shiftKey) {
      this.props.deleteNode(this.props.id)
    }
  }

  handleMouseDown = (e) => {
    this.props.nodeGrabbed(this.props.id)
  }

  render () {
    return (
      <circle id={this.props.id} cx={this.props.x} cy={this.props.y}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        fill='black' r='1'
      />
    )
  }
}

export default Node
