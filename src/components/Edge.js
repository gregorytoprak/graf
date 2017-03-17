import React, { Component } from "react";
import { vec } from "../utils";

class Edge extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
  };

  handleMouseUp = e => {
    this.props.emptyHand();
  };

  handleClick = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.deleteEdge();
    } else {
      this.props.selectEdge();
    }
  };

  handleDoubleClick = e => {
    e.stopPropagation();
  };

  render() {
    const baseProps = {
      className: "Edge",
      stroke: this.props.selected
        ? "dodgerblue"
        : this.props.color ? this.props.color : "black",
      strokeWidth: "0.1",
      fill: "none",
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onClick: this.handleClick,
      onDoubleClick: this.handleDoubleClick
    };
    if (this.props.loop) {
      const loc = vec.add(
        this.props.startLoc,
        vec.scl(1 / 2, this.props.controlPt)
      );
      const r = vec.len(this.props.controlPt) / 2;
      return <circle {...baseProps} cx={loc[0]} cy={loc[1]} r={r} />;
    }
    const startLoc = this.props.startLoc;
    const endLoc = this.props.complete
      ? this.props.endLoc
      : this.props.hand.loc;
    const midPt = vec.scl(1 / 2, vec.add(startLoc, endLoc));
    const controlLoc = vec.add(midPt, this.props.controlPt);
    const p = x => `${x[0]},${x[1]}`;
    const d = this.props.moved
      ? `M ${p(startLoc)} Q ${p(controlLoc)} ${p(endLoc)}`
      : `M ${p(startLoc)} L ${p(endLoc)}`;
    return <path {...baseProps} d={d} />;
  }
}

export default Edge;
