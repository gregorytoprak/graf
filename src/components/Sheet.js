import React, { Component } from "react";
import NodeContainer from "../containers/NodeContainer";
import EdgeContainer from "../containers/EdgeContainer";
import EdgeHandleContainer from "../containers/EdgeHandleContainer";
import {
  PAN_HAND,
  MOVE_NODE_HAND,
  START_EDGE_HAND,
  MOVE_EDGE_HANDLE_HAND
} from "../actions/hand";
import { vec } from "../utils";

class Sheet extends Component {
  getLoc = event => {
    const { center, dims, vdims } = this.props;
    const zeroPt = vec.sub(center, vec.scl(1 / 2, dims));
    const scale = vec.div(dims, vdims);
    const raw = [event.clientX, event.clientY];
    return vec.add(vec.prd(raw, scale), zeroPt);
  };

  handleWheel = e => {
    e.preventDefault();
    const zoomLoc = this.getLoc(e);
    let zoomFactor = 1.02 ** e.deltaY;
    if (this.props.h * zoomFactor > 100) {
      zoomFactor = 100 / this.props.h;
    } else if (this.props.h * zoomFactor < 1) {
      zoomFactor = 1 / this.props.h;
    }
    this.props.zoomSheet(zoomLoc, zoomFactor);
  };

  handleMouseDown = e => {
    const grabLoc = this.getLoc(e);
    this.props.panHand(grabLoc);
  };

  handleMouseUp = e => {
    const h = this.props.hand;
    if (h.palm === START_EDGE_HAND) {
      this.props.dropEdge();
    }
    this.props.emptyHand();
  };

  handleDoubleClick = e => {
    const initNodePt = this.getLoc(e);
    this.props.createNode(initNodePt);
  };

  handleMouseMove = e => {
    const h = this.props.hand;
    if (h.palm === PAN_HAND) {
      const moveLoc = this.getLoc(e);
      const shift = vec.sub(h.grabLoc, moveLoc);
      this.props.panSheet(shift);
    } else if (h.palm === MOVE_NODE_HAND) {
      const moveLoc = this.getLoc(e);
      const newNodePt = vec.add(h.relGrabLoc, moveLoc);
      this.props.moveNode(h.id, newNodePt);
    } else if (h.palm === START_EDGE_HAND) {
      const moveLoc = this.getLoc(e);
      this.props.startEdgeHand(moveLoc);
    } else if (h.palm === MOVE_EDGE_HANDLE_HAND) {
      const moveLoc = this.getLoc(e);
      const newHandleLoc = vec.add(h.relGrabLoc, moveLoc);
      this.props.moveEdgeHandle(h.id, newHandleLoc);
    }
  };

  render() {
    const { center, dims } = this.props;
    const zeroPt = vec.sub(center, vec.scl(1 / 2, dims));
    const vb = [zeroPt, dims];
    return (
      <svg
        className="Sheet"
        viewBox={`${vb[0][0]} ${vb[0][1]} ${vb[1][0]} ${vb[1][1]}`}
        xmlns="http://www.w3.org/2000/svg"
        onWheel={this.handleWheel}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onDoubleClick={this.handleDoubleClick}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.edgeIds.map(id => <EdgeContainer key={id} id={id} />)}
        {this.props.nodeIds.map(id => (
          <NodeContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
        {this.props.edgeIds.map(id => (
          <EdgeHandleContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
      </svg>
    );
  }
}

export default Sheet;
