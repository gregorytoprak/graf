import React, { Component } from 'react'

class Node extends Component {
  state = { hand: 'EMPTY' }

  handleMouseDown = (e) => {
    e.stopPropagation()
    const grabLoc = this.props.getLoc(e)
    const relLoc = {
      x: this.props.cx - grabLoc.x,
      y: this.props.cy - grabLoc.y
    }
    this.setState({ hand: 'MOVE', relLoc })
  }

  handleMouseMove = (e) => {
    if (this.state.hand === 'MOVE') {
      const moveLoc = this.props.getLoc(e)
      this.props.move(
        moveLoc.x + this.state.relLoc.x,
        moveLoc.y + this.state.relLoc.y
      )
    }
  }

  handleMouseUp = (e) => {
    this.setState({ hand: 'EMPTY' })
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
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Node
