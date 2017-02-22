import React, { Component } from 'react'

class Node extends Component {
  render () {
    return (
      <circle className='Node'
        cx={this.props.loc.x} cy={this.props.loc.y}
        r='1' fill='white' strokeWidth='0.05'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
      />
    )
  }
}

export default Node
