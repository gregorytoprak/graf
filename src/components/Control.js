import React, { Component } from 'react'

class Control extends Component {
  handleMouseDown = (e) => {
    e.stopPropagation()
    const grabLoc = this.props.getLoc(e)
    const { startLoc, endLoc } = this.props
    const loc = this.props.curved
      ? {
        x: this.props.controlx - grabLoc.x,
        y: this.props.controly - grabLoc.y
      }
      : {
        x: (startLoc.x + endLoc.x) / 2 - grabLoc.x,
        y: (startLoc.y + endLoc.y) / 2 - grabLoc.y
      }
    this.props.moveControlHand(loc)
  }

  handleMouseUp = (e) => {
    this.props.emptyHand()
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (e.shiftKey) {
      this.props.resetControl()
    } else {
      this.props.selectEdge()
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation()
  }

  render () {
    if (!this.props.complete || !this.props.selected) { return null }
    const { startLoc, endLoc } = this.props
    const loc = {
      cx: this.props.curved ? this.props.controlx : (startLoc.x + endLoc.x) / 2,
      cy: this.props.curved ? this.props.controly : (startLoc.y + endLoc.y) / 2
    }
    return (
      <circle className='Control'
        cx={loc.cx} cy={loc.cy}
        r='0.5' fill='white' strokeWidth='0.05' stroke='dodgerblue'
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Control
