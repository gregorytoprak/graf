import React, { Component } from 'react'

class Node extends Component {
  state = {}

  // handlers

  handleMouseDown = (e) => {
    e.stopPropagation() // don't grab the ground beneath this node
    if (e.metaKey && !e.shiftKey) {
      this.props.edgeStarted(this.props.id)
    } else if (!e.metaKey && !e.shiftKey) {
      this.props.nodeGrabbed(this.props.id, this.props.loc, e)
    }
  }

  handleMouseUp = (e) => {
    if (e.metaKey && !e.shiftKey) {
      e.stopPropagation() // don't release an edge when it should be completed
      this.props.edgeEnded(this.props.id)
    }
  }

  handleClick = (e) => {
    e.stopPropagation() // don't select the ground beneath this node
    if (e.shiftKey && !e.metaKey) {
      this.props.deleteNode(this.props.id)
    } else if (!e.shiftKey && !e.metaKey) {
      this.props.toggleSelectNode(this.props.id)
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation() // don't create a node on top of this node
  }

  // renders

  render () {
    return (
      <circle id={this.props.id}
        cx={this.props.loc.x} cy={this.props.loc.y}
        r='1'
        fill='white'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        strokeWidth='0.05'
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Node
