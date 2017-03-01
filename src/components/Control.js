import React, { Component } from 'react'

class Control extends Component {
  render () {
    const { startLoc, endLoc } = this.props
    const loc = {
      cx: this.props.curved ? this.props.cx : (startLoc.cx + endLoc.cx) / 2,
      cy: this.props.curved ? this.props.cy : (startLoc.cy + endLoc.cy) / 2
    }
    return (
      <circle className='Control'
        cx={loc.cx} cy={loc.cy}
        r='0.5' fill='white' strokeWidth='0.05'
        stroke={this.props.selected ? 'dodgerblue' : 'black'}
      />
    )
  }
}

export default Control
