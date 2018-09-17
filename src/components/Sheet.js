import React, { Component } from "react"
import NodeContainer from "../containers/NodeContainer"
import EdgeContainer from "../containers/EdgeContainer"
import EdgeHandleContainer from "../containers/EdgeHandleContainer"
import AxisContainer from "../containers/AxisContainer"
import {
  PAN_HAND,
  MOVE_NODE_HAND,
  START_EDGE_HAND,
  MOVE_EDGE_HANDLE_HAND,
  MOVE_AXIS_ORIGIN_HAND,
  MOVE_AXIS_UNIT_HAND,
} from "../actions/hand"
import { vec } from "../utils"

class Sheet extends Component {
  getPt = (e) => {
    const { center, dims, vdims } = this.props
    const zeroPt = vec.sub(center, vec.scl(0.5, dims))
    const scale = vec.div(dims, vdims)
    const rawPt = [e.clientX, e.clientY]
    return vec.add(vec.prd(rawPt, scale), zeroPt)
  }

  handleMouseMove = (e) => {
    const h = this.props.hand
    const handPt = this.getPt(e)
    if (h.palm === PAN_HAND) {
      const shift = vec.sub(h.grabPt, handPt)
      this.props.panSheet(shift)
    } else if (h.palm === MOVE_NODE_HAND) {
      const newPt = vec.add(h.relGrabPt, handPt)
      this.props.moveNode(h.id, newPt)
      this.props.handMoving()
    } else if (h.palm === START_EDGE_HAND) {
      this.props.startEdgeHand(handPt)
    } else if (h.palm === MOVE_EDGE_HANDLE_HAND) {
      const newHandleLoc = vec.add(h.relGrabPt, handPt)
      this.props.moveEdgeHandle(h.id, newHandleLoc)
      this.props.handMoving()
    } else if (h.palm === MOVE_AXIS_ORIGIN_HAND) {
      const newOriginPt = vec.add(h.relGrabPt, handPt)
      this.props.moveAxisOrigin(h.id, newOriginPt)
      this.props.handMoving()
    } else if (h.palm === MOVE_AXIS_UNIT_HAND) {
      const newUnitLoc = vec.add(h.relGrabPt, handPt)
      this.props.moveAxisUnit(h.id, newUnitLoc)
      this.props.handMoving()
    }
  }

  handleWheel = (e) => {
    e.preventDefault()
    const zoomPt = this.getPt(e)
    let zoomFactor = 1.02 ** e.deltaY
    if (this.props.dims[0] * zoomFactor > 100) {
      zoomFactor = 100 / this.props.dims[0]
    } else if (this.props.dims[0] * zoomFactor < 1) {
      zoomFactor = 1 / this.props.dims[0]
    }
    this.props.zoomSheet(zoomPt, zoomFactor)
  }

  handleMouseDown = (e) => {
    const grabPt = this.getPt(e)
    this.props.panHand(grabPt)
  }

  handleMouseUp = (e) => {
    const h = this.props.hand
    if (h.palm === START_EDGE_HAND) {
      this.props.dropEdge()
    }
    this.props.emptyHand()
  }

  handleDoubleClick = (e) => {
    if (e.metaKey) {
      const initOriginPt = this.getPt(e)
      this.props.createAxis(6, initOriginPt, vec.add(initOriginPt, [0, -3]))
    } else {
      const initPt = this.getPt(e)
      this.props.createNode(initPt)
    }
  }

  render() {
    const { center, dims } = this.props
    const zeroPt = vec.sub(center, vec.scl(0.5, dims))
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="Sheet"
        viewBox={`${zeroPt[0]} ${zeroPt[1]} ${dims[0]} ${dims[1]}`}
        onWheel={this.handleWheel}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onDoubleClick={this.handleDoubleClick}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.edgeIds.map((id) => (
          <EdgeContainer key={id} id={id} />
        ))}
        {this.props.nodeIds.map((id) => (
          <NodeContainer key={id} id={id} getPt={this.getPt} />
        ))}
        {this.props.edgeIds.map((id) => (
          <EdgeHandleContainer key={id} id={id} getPt={this.getPt} />
        ))}
        {this.props.axisIds.reverse().map((id) => (
          <AxisContainer key={id} id={id} getPt={this.getPt} />
        ))}
      </svg>
    )
  }
}

export default Sheet
