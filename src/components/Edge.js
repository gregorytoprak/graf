import React, { Component } from 'react'

class Edge extends Component {
  state = {}

  // handlers

  handleClick = (e) => {
    e.stopPropagation() // don't select the ground beneath this edge
    if (e.shiftKey) {
      this.props.deleteEdge(this.props.id)
    } else if (!e.shiftKey) {
      this.props.toggleSelectEdge(this.props.id)
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation() // don't create a node on top of this edge
  }

  // renders

  render () {
    return (
      <line id={this.props.id}
        x1={this.props.startLoc.x} y1={this.props.startLoc.y}
        x2={this.props.endLoc.x} y2={this.props.endLoc.y}
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        strokeWidth='0.1'
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Edge
