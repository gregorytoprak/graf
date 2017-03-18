import React, { Component } from "react";
import { vec } from "../utils";

class EdgeHandle extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    const grabLoc = this.props.getLoc(e);
    const relGrabLoc = vec.sub(this.props.handleLoc, grabLoc);
    this.props.moveEdgeHandleHand(relGrabLoc);
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
    const pt = vec.add(this.props.midPt, this.props.handleLoc);
    return (
      <circle
        className="EdgeHandle"
        cx={pt[0]}
        cy={pt[1]}
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
