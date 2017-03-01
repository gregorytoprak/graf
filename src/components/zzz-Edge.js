import React, { Component } from 'react'

class Edge extends Component {
  state = {}

  // handlers

  handleMouseDown = (e) => {
    e.stopPropagation()
  }

  handleMouseDownControl = (e) => {
    e.stopPropagation()
    if (!e.shiftKey) {
      this.props.edgeGrabbed(this.props.id, this.props.controlLoc, e)
    }
  }

  handleMouseUp = (e) => {
    this.props.edgeReleased()
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (e.shiftKey) {
      this.props.deleteEdge(this.props.id)
    } else if (!e.shiftKey) {
      this.props.toggleSelectEdge(this.props.id)
    }
  }

  handleClickControl = (e) => {
    e.stopPropagation()
    if (e.shiftKey) {
      this.props.straightenEdge(this.props.id)
    } else if (!e.shiftKey) {
      this.props.toggleSelectEdge(this.props.id)
    }
  }

  handleDoubleClick = (e) => {
    e.stopPropagation()
  }

  // renders

  render () {
    const p = c => `${c.x},${c.y}`
    const { startLoc, endLoc, controlLoc } = this.props
    const d = this.props.curved
      ? `M ${p(startLoc)} Q ${p(controlLoc)} ${p(endLoc)}`
      : `M ${p(startLoc)} L ${p(endLoc)}`
    return (
      <g>
        <path id={this.props.id}
          d={d}
          fill='none'
          stroke={this.props.selected ? 'dodgerblue' : 'black'}
          strokeWidth='0.1'
          onMouseDown={this.handleMouseDown}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
        />
        {this.props.selected
          ? (
            <circle
              cx={controlLoc.x} cy={controlLoc.y}
              r='0.5' fill='white' stroke='dodgerblue' strokeWidth='0.05'
              onMouseDown={this.handleMouseDownControl}
              onMouseUp={this.handleMouseUp}
              onClick={this.handleClickControl}
              onDoubleClick={this.handleDoubleClick}
            />
          )
          : null
        }
      </g>
    )
  }
}

export default Edge
