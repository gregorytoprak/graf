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
    const { startPt, endPt } = this.props;
    const midPt = vec.scl(0.5, vec.add(startPt, endPt));
    if (this.props.endNodeId === this.props.startNodeId) {
      const loopCenterLoc = vec.scl(0.5, this.props.handleLoc);
      const centerPt = vec.add(midPt, loopCenterLoc);
      const r = vec.len(loopCenterLoc);
      return <circle {...baseProps} cx={centerPt[0]} cy={centerPt[1]} r={r} />;
    } else {
      const controlPt = vec.add(midPt, this.props.handleLoc);
      const p = x => `${x[0]},${x[1]}`;
      const d = `M ${p(startPt)} Q ${p(controlPt)} ${p(endPt)}`;
      return <path {...baseProps} d={d} />;
    }
  }
}

export default Edge;
