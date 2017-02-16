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
    this.props.edgeReleased()
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

  render () {
    return (
      // <line id={this.props.id}
      //   x1={this.props.startLoc.x} y1={this.props.startLoc.y}
      //   x2={this.props.endLoc.x} y2={this.props.endLoc.y}
      //   stroke={this.props.selected ? 'dodgerblue' : 'black'}
      //   strokeWidth='0.1'
      //   onMouseDown={this.handleMouseDown}
      //   onClick={this.handleClick}
      //   onDoubleClick={this.handleDoubleClick}
      // />
      <line id={this.props.id}
        x1={this.props.startLoc.x} y1={this.props.startLoc.y}
        x2={this.props.endLoc.x} y2={this.props.endLoc.y}
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
