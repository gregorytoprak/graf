import React, { Component } from 'react'
// import NodesContainer from '../containers/NodesContainer'
// import EdgesContainer from '../containers/EdgesContainer'
// import ControlsContainer from '../containers/ControlsContainer'

class Sheet extends Component {
  state = { hand: 'EMPTY', grabLoc: null }

  resetState = () => {
    this.setState({ hand: 'EMPTY', grabLoc: null })
  }

  getLoc = (event) => {
    const raw = { x: event.clientX, y: event.clientY }
    const vmax = Math.max(this.props.viewport.width, this.props.viewport.height)
    return {
      x: raw.x * (this.props.s / vmax) + this.props.loc.cx - this.props.s / 2,
      y: raw.y * (this.props.s / vmax) + this.props.loc.cy - this.props.s / 2
    }
  }

  handleWheel = (e) => {
    e.preventDefault()
    const zoomLoc = this.getLoc(e)
    let zoomFactor = 1.02 ** e.deltaY
    if (this.props.s * zoomFactor > 100) {
      zoomFactor = 100 / this.props.s
    } else if (this.props.s * zoomFactor < 1) {
      zoomFactor = 1 / this.props.s
    }

    this.props.zoom({
      cx: this.props.loc.cx * zoomFactor + zoomLoc.x * (1 - zoomFactor),
      cy: this.props.loc.cy * zoomFactor + zoomLoc.y * (1 - zoomFactor)
    }, this.props.s * zoomFactor)
  }

  handleMouseDown = (e) => {
    this.setState({ hand: 'PAN_GROUND', grabLoc: this.getLoc(e) })
  }

  handleMouseMove = (e) => {
    const moveLoc = this.getLoc(e)
    if (this.state.hand === 'PAN_GROUND') {
      this.props.pan({
        cx: this.props.loc.cx + this.state.grabLoc.x - moveLoc.x,
        cy: this.props.loc.cy + this.state.grabLoc.y - moveLoc.y
      })
    }
  }

  handleMouseUp = (e) => {
    if (this.state.hand === 'PAN_GROUND') {
      this.resetState()
    }
  }

  render () {
    const viewBox = [
      this.props.loc.cx - this.props.s / 2,
      this.props.loc.cy - this.props.s / 2,
      this.props.s,
      this.props.s
    ].join(' ')
    return (
      <svg className='Sheet' viewBox={viewBox}
        onWheel={this.handleWheel}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        <circle cx='0' cy='0' r='1' />
      </svg>
    )
  }
}

// <NodesContainer />
// <EdgesContainer />
// <ControlsContainer />

export default Sheet
