import React, { Component } from 'react'

class Control extends Component {
  render () {
    if (!this.props.complete || !this.props.selected) { return null }
    const { startLoc, endLoc } = this.props
    const loc = {
      cx: this.props.curved ? this.props.controlx : (startLoc.cx + endLoc.cx) / 2,
      cy: this.props.curved ? this.props.controly : (startLoc.cy + endLoc.cy) / 2
    }
    return (
      <circle className='Control'
        cx={loc.cx} cy={loc.cy}
        r='0.5' fill='white' strokeWidth='0.05' stroke='dodgerblue'
      />
    )
  }
}

export default Control
