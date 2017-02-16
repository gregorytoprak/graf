import React, { Component } from 'react'

class Edge extends Component {
  state = {}

  // handlers

  handleMouseDown = (e) => {
    e.stopPropagation()
    if (!e.shiftKey && !e.metaKey) {
      this.props.edgeGrabbed(this.props.id)
    }
  }

  handleMouseUp = (e) => {
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (e.shiftKey && !e.metaKey) {
      this.props.deleteEdge(this.props.id)
    } else if (!e.shiftKey && !e.metaKey) {
      this.props.toggleSelectEdge(this.props.id)
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation()
  }

  // renders

  position = (loc) => `${loc.x},${loc.y}`

  render () {
    const p = this.position
    const { startLoc, endLoc, control } = this.props
    const d = `M ${p(startLoc)} Q ${p(control)} ${p(endLoc)}`
    return (
      <path id={this.props.id}
        d={d}
        fill='none'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        strokeWidth='0.1'
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Edge
