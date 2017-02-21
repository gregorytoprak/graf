import React, { Component } from 'react'
// import NodesContainer from '../containers/NodesContainer'
// import EdgesContainer from '../containers/EdgesContainer'
// import ControlsContainer from '../containers/ControlsContainer'

class Sheet extends Component {
  getLoc = (event) => {
    const raw = { x: event.clientX, y: event.clientY }
    const vmax = Math.max(this.props.dims.width, this.props.dims.height)
    return {
      x: raw.x * (this.props.s / vmax) + this.props.loc.x,
      y: raw.y * (this.props.s / vmax) + this.props.loc.y
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
      x: this.props.loc.x * zoomFactor + zoomLoc.x * (1 - zoomFactor),
      y: this.props.loc.y * zoomFactor + zoomLoc.y * (1 - zoomFactor)
    }, this.props.s * zoomFactor)
  }

  render () {
    const viewBox = [this.props.loc.x, this.props.loc.y, this.props.s, this.props.s].join(' ')
    return (
      <svg className='Sheet' viewBox={viewBox}
        onWheel={this.handleWheel}
      >
        <circle cx='5' cy='5' r='1' />
      </svg>
    )
  }
}

// <NodesContainer />
// <EdgesContainer />
// <ControlsContainer />

export default Sheet
