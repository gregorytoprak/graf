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
    if (this.props.endNodeId === this.props.startNodeId) {
      const loc = vec.add(
        this.props.startPt,
        vec.scl(1 / 2, this.props.handleLoc)
      );
      const r = vec.len(this.props.handleLoc) / 2;
      return <circle {...baseProps} cx={loc[0]} cy={loc[1]} r={r} />;
    }
    const { startPt, endPt } = this.props;
    const midPt = vec.scl(1 / 2, vec.add(startPt, endPt));
    const controlPt = vec.add(midPt, this.props.handleLoc);
    const p = x => `${x[0]},${x[1]}`;
    const d = `M ${p(startPt)} Q ${p(controlPt)} ${p(endPt)}`;
    return <path {...baseProps} d={d} />;
  }
}

export default Edge;
