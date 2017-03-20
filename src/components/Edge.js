import React, { Component } from "react";
import Arrow from "./Arrow";
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
    if (this.props.startNodeId === this.props.endNodeId) {
      const dirOf = pt => Math.atan2(pt[1], pt[0]);
      const dir = this.props.endNodeId ? 0 : dirOf(vec.sub(endPt, startPt));

      const loopCenterLoc = vec.scl(0.5, this.props.handleLoc);
      const centerPt = vec.add(midPt, loopCenterLoc);
      const r = vec.len(loopCenterLoc);
      return (
        <g>
          <circle {...baseProps} cx={centerPt[0]} cy={centerPt[1]} r={r} />
          {this.props.arrow
            ? <Arrow baseProps={baseProps} endPt={endPt} dir={dir} />
            : null}
        </g>
      );
    } else {
      const dirOf = pt => Math.atan2(pt[1], pt[0]);
      const dir = this.props.endNodeId ? 0 : dirOf(vec.sub(endPt, startPt));

      const controlPt = vec.add(midPt, this.props.handleLoc);
      const p = x => `${x[0]},${x[1]}`;
      const d = `M ${p(startPt)} Q ${p(controlPt)} ${p(endPt)}`;
      return (
        <g>
          <path {...baseProps} d={d} />
          {this.props.arrow
            ? <Arrow baseProps={baseProps} endPt={endPt} dir={dir} />
            : null}
        </g>
      );
    }
  }
}

export default Edge;
