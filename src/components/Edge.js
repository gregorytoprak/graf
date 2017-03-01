import React, { Component } from 'react'

class Edge extends Component {
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
      />
    )
  }
}

export default Edge
