import React, { Component } from 'react'

class Node extends Component {
  handleMouseDown = (e) => {
    e.stopPropagation()
    const grabLoc = this.props.getLoc(e)
    const relLoc = {
      x: this.props.cx - grabLoc.x,
      y: this.props.cy - grabLoc.y
    }
    this.props.moveNodeHand(this.props.id, relLoc)
  }

  handleMouseUp = (e) => {
    this.props.emptyHand()
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (e.shiftKey) {
      this.props.delete()
    } else if (!e.shiftKey) {
      this.props.select()
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation()
  }

  render () {
    return (
      <circle className='Node'
        cx={this.props.cx} cy={this.props.cy}
        r='1' fill='white' strokeWidth='0.05'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Node
