import React, { Component } from 'react'

class Node extends Component {

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
        cx={this.props.loc.x} cy={this.props.loc.y}
        r='1' fill='white' strokeWidth='0.05'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    )
  }
}

export default Node
