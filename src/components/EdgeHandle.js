import React, { Component } from "react";
import { vec } from "../utils";

class EdgeHandle extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    const grabPt = this.props.getPt(e);
    const relGrabPt = vec.sub(this.props.handleLoc, grabPt);
    this.props.moveEdgeHandleHand(relGrabPt);
  };

  handleMouseUp = e => {
    this.props.emptyHand();
  };

  handleClick = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.resetEdgeHandle();
    } else {
      this.props.selectEdge();
    }
  };

  handleDoubleClick = e => {
    e.stopPropagation();
  };

  render() {
    if (!this.props.selected) {
      return null;
    }
    const { startPt, endPt } = this.props;
    const midPt = vec.scl(0.5, vec.add(startPt, endPt));
    const centerPt = vec.add(midPt, this.props.handleLoc);
    return (
      <circle
        className="EdgeHandle"
        cx={centerPt[0]}
        cy={centerPt[1]}
        r="0.5"
        stroke="dodgerblue"
        strokeWidth="0.05"
        fill={this.props.color ? this.props.color : "white"}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      />
    );
  }
}

export default EdgeHandle;
