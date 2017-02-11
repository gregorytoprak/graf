import React, { Component } from 'react'

class Node extends Component {
  state = {}

  handleClick = (e) => {
    e.stopPropagation() // don't select the ground beneath this node
    if (e.shiftKey) {
      this.props.deleteNode(this.props.id)
    } else {
      this.props.toggleSelectNode(this.props.id)
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation() // don't create a node on top of this node
  }

  handleMouseDown = (e) => {
    if (e.metaKey) {
      this.props.edgeStarted(this.props.id)
    } else {
      this.props.nodeGrabbed(this.props.id)
    }
  }

  handleMouseUp = (e) => {
    if (e.metaKey) {
      e.stopPropagation() // don't release an edge when it should be completed
      this.props.edgeEnded(this.props.id)
    }
  }

  render () {
    return (
      <circle id={this.props.id}
        cx={this.props.loc.x} cy={this.props.loc.y}
        r='1' fill={this.props.selected ? 'skyBlue' : 'white'}
        stroke='black' strokeWidth='0.05'
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      />
    )
  }
}

export default Node
