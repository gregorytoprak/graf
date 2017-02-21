import React, { Component } from 'react'
// import NodesContainer from '../containers/NodesContainer'
// import EdgesContainer from '../containers/EdgesContainer'
// import ControlsContainer from '../containers/ControlsContainer'

class Sheet extends Component {
  // handleWheel = (e) => {
  //   e.preventDefault()
  //   if (this.state.grabbed.type === 'EMPTY') {
  //     const zoomLoc = this.getLoc(e)
  //     this.zoomGround(zoomLoc, e.deltaY)
  //   }
  // }
  //
  // zoomGround = (zoomLoc, deltaY) => {
  //   const olds = this.state.dims
  //   let zoomFactor = 1.02 ** deltaY
  //   if (olds.w * zoomFactor > 250) {
  //     zoomFactor = 250 / olds.w
  //   } else if (olds.w * zoomFactor < 2.5) {
  //     zoomFactor = 2.5 / olds.w
  //   }
  //   const news = {
  //     x: olds.x * zoomFactor + zoomLoc.x * (1 - zoomFactor),
  //     y: olds.y * zoomFactor + zoomLoc.y * (1 - zoomFactor),
  //     w: olds.w * zoomFactor,
  //     h: olds.h * zoomFactor
  //   }
  //   this.setState({
  //     dims: news
  //   })
  // }

  handleWheel = (e) => {
    e.preventDefault()
    // const zoomLoc =
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
