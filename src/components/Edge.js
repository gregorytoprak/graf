import React, { Component } from 'react'

class Edge extends Component {
  handleMouseDown = (e) => {
    e.stopPropagation()
  }

  handleMouseUp = (e) => {
    this.props.emptyHand()
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (e.shiftKey) {
      this.props.deleteEdge()
    } else {
      this.props.selectEdge()
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation()
  }

  render () {
    const startLoc = this.props.startLoc
    const endLoc = this.props.complete ? this.props.endLoc : this.props.hand.loc
    const controlLoc = { x: this.props.controlx, y: this.props.controly }
    const p = a => `${a.x},${a.y}`
    return (
      <path className='Edge'
        fill='none' strokeWidth='0.1'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        d={this.props.curved
          ? `M ${p(startLoc)} Q ${p(controlLoc)} ${p(endLoc)}`
          : `M ${p(startLoc)} L ${p(endLoc)}`}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Edge
