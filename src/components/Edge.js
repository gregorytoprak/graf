import React, { Component } from 'react'

class Edge extends Component {
  state = {}

  handleClick = (e) => {
    if (e.shiftKey) {
      this.props.deleteEdge(this.props.id)
    }
  }

  render () {
    return (
      <line id={this.props.id}
        x1={this.props.startLoc.x} y1={this.props.startLoc.y}
        x2={this.props.endLoc.x} y2={this.props.endLoc.y}
        stroke='black' strokeWidth='0.05'
        onClick={this.handleClick}
      />
    )
  }
}

export default Edge
