import React, { Component } from 'react'

class Edge extends Component {
  render () {
    const { startLoc, endLoc, controlLoc } = this.props
    const p = a => `${a.cx},${a.cy}`
    return (
      <path className='Edge'
        fill='none' strokeWidth='0.1'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
        d={this.props.curved
          ? `M ${p(startLoc)} Q ${p(controlLoc)} ${p(endLoc)}`
          : `M ${p(startLoc)} L ${p(endLoc)}`}
      />
    )
  }
}

export default Edge
