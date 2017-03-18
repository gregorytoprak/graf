import React, { Component } from "react";
import { vec } from "../utils";

class Control extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    const grabLoc = this.props.getLoc(e);
    const relGrabLoc = vec.sub(this.props.controlPt, grabLoc);
    this.props.moveControlHand(relGrabLoc);
  };

  handleMouseUp = e => {
    this.props.emptyHand();
  };

  handleClick = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.resetControl();
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
    const loc = vec.add(this.props.midPt, this.props.controlPt);
    return (
      <circle
        className="Control"
        cx={loc[0]}
        cy={loc[1]}
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

export default Control;
