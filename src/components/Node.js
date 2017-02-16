import React, { Component } from 'react'

class Node extends Component {
  state = {}

  // handlers

  handleMouseDown = (e) => {
    e.stopPropagation()
    if (!e.shiftKey && e.metaKey) {
      this.props.edgeStarted(this.props.id)
    } else if (!e.shiftKey && !e.metaKey) {
      this.props.nodeGrabbed(this.props.id, this.props.loc, e)
    }
  }

  handleMouseUp = (e) => {
    e.stopPropagation()
    if (!e.shiftKey && e.metaKey) {
      this.props.edgeEnded(this.props.id)
    } else if (!e.shiftKey && !e.metaKey) {
      this.props.nodeReleased()
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (e.shiftKey && !e.metaKey) {
      this.props.deleteNode(this.props.id)
    } else if (!e.shiftKey && !e.metaKey) {
      this.props.toggleSelectNode(this.props.id)
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation()
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
