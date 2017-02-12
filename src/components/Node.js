import React, { Component } from 'react'
import { getLoc } from '../utils'

class Node extends Component {
  state = {}

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

  handleMouseDown = (e) => {
    if (e.metaKey && !e.shiftKey) {
      this.props.edgeStarted(this.props.id)
    } else if (!e.metaKey && !e.shiftKey) {
      const grabLoc = getLoc(e, this.props.dims)
      const relLoc = {
        x: this.props.loc.x - grabLoc.x,
        y: this.props.loc.y - grabLoc.y
      }
      this.props.nodeGrabbed(this.props.id, relLoc)
    }
  }

  handleMouseUp = (e) => {
    if (e.metaKey && !e.shiftKey) {
      e.stopPropagation() // don't release an edge when it should be completed
      this.props.edgeEnded(this.props.id)
    }
  }

  render () {
    return (
      <circle id={this.props.id}
        cx={this.props.loc.x} cy={this.props.loc.y}
        r='1' fill={this.props.selected ? 'black' : 'white'}
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
