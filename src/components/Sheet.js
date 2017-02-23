import React, { Component } from 'react'
import NodeContainer from '../containers/NodeContainer'
import { PAN_HAND, MOVE_NODE_HAND } from '../actions/hand'

class Sheet extends Component {
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
    this.props.zoom(zoomLoc, zoomFactor)
  }

  handleMouseDown = (e) => {
    this.props.panHand(this.getLoc(e))
  }

  handleMouseMove = (e) => {
    if (this.props.hand.type === PAN_HAND) {
      const moveLoc = this.getLoc(e)
      this.props.pan(
        this.props.hand.loc.x - moveLoc.x,
        this.props.hand.loc.y - moveLoc.y
      )
    } else if (this.props.hand.type === MOVE_NODE_HAND) {
      const moveLoc = this.getLoc(e)
      this.props.moveNode(
        this.props.hand.id,
        moveLoc.x + this.props.hand.loc.x,
        moveLoc.y + this.props.hand.loc.y
      )
    }
  }

  handleMouseUp = (e) => {
    this.props.emptyHand()
  }

  handleDoubleClick = (e) => {
    const loc = this.getLoc(e)
    this.props.node(loc.x, loc.y)
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
        onDoubleClick={this.handleDoubleClick}
      >
        <circle cx='0' cy='0' r='1' />
        {this.props.nodeIds.map(id => <NodeContainer key={id} id={id} getLoc={this.getLoc} />)}
      </svg>
    )
  }
}

export default Sheet
