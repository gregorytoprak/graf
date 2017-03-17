import React, { Component } from "react";
import NodeContainer from "../containers/NodeContainer";
import EdgeContainer from "../containers/EdgeContainer";
import ControlContainer from "../containers/ControlContainer";
import {
  PAN_HAND,
  MOVE_NODE_HAND,
  START_EDGE_HAND,
  MOVE_CONTROL_HAND
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

  handleMouseMove = e => {
    if (this.props.hand.palm === PAN_HAND) {
      const moveLoc = this.getLoc(e);
      const shift = vec.sub(this.props.hand.grabLoc, moveLoc);
      this.props.panSheet(shift);
    } else if (this.props.hand.palm === MOVE_NODE_HAND) {
      const moveLoc = this.getLoc(e);
      this.props.moveNode(
        this.props.hand.id,
        moveLoc.x + this.props.hand.x,
        moveLoc.y + this.props.hand.y
      );
    } else if (this.props.hand.palm === START_EDGE_HAND) {
      const moveLoc = this.getLoc(e);
      this.props.startEdgeHand(this.props.hand.id, moveLoc);
    } else if (this.props.hand.palm === MOVE_CONTROL_HAND) {
      const moveLoc = this.getLoc(e);
      const newControlPt = vec.add(this.props.hand.relGrabLoc, moveLoc);
      this.props.moveControl(this.props.hand.id, newControlPt);
    }
  };

  handleMouseUp = e => {
    if (this.props.hand.palm === START_EDGE_HAND) {
      this.props.deleteEdge(this.props.hand.id);
    }
    this.props.emptyHand();
  };

  handleDoubleClick = e => {
    const loc = this.getLoc(e);
    this.props.createNode(loc.x, loc.y);
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
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onDoubleClick={this.handleDoubleClick}
      >
        {this.props.edgeIds.map(id => <EdgeContainer key={id} id={id} />)}
        {this.props.nodeIds.map(id => (
          <NodeContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
        {this.props.edgeIds.map(id => (
          <ControlContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
      </svg>
    );
  }
}

export default Sheet;
