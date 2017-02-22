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
    return {
      x: raw.x * (this.props.w / this.props.vw) + this.props.cx - this.props.w / 2,
      y: raw.y * (this.props.h / this.props.vh) + this.props.cy - this.props.h / 2
    }
  }

  handleWheel = (e) => {
    e.preventDefault()
    const zoomLoc = this.getLoc(e)
    let zoomFactor = 1.02 ** e.deltaY
    if (this.props.h * zoomFactor > 100) {
      zoomFactor = 100 / this.props.h
    } else if (this.props.h * zoomFactor < 1) {
      zoomFactor = 1 / this.props.h
    }

    this.props.zoom(
      this.props.cx * zoomFactor + zoomLoc.x * (1 - zoomFactor),
      this.props.cy * zoomFactor + zoomLoc.y * (1 - zoomFactor),
      this.props.w * zoomFactor,
      this.props.h * zoomFactor
    )
  }

  handleMouseDown = (e) => {
    this.setState({ hand: 'PAN_GROUND', grabLoc: this.getLoc(e) })
  }

  handleMouseMove = (e) => {
    const moveLoc = this.getLoc(e)
    if (this.state.hand === 'PAN_GROUND') {
      this.props.pan(
        this.state.grabLoc.x - moveLoc.x,
        this.state.grabLoc.y - moveLoc.y
      )
    }
  }

  handleMouseUp = (e) => {
    if (this.state.hand === 'PAN_GROUND') {
      this.resetState()
    }
  }

  render () {
    const viewBox = [
      this.props.cx - this.props.w / 2,
      this.props.cy - this.props.h / 2,
      this.props.w,
      this.props.h
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
