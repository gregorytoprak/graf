import React, { Component } from "react";
import { dist } from "../utils";

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
      return (
        <circle
          {...baseProps}
          cx={this.props.startLoc.x + this.props.controlx / 2}
          cy={this.props.startLoc.y + this.props.controly / 2}
          r={dist([this.props.controlx, this.props.controly], [0, 0]) / 2}
        />
      );
    }
    const startLoc = this.props.startLoc;
    const endLoc = this.props.complete
      ? this.props.endLoc
      : this.props.hand.loc;
    const controlLoc = { x: this.props.controlx, y: this.props.controly };
    const p = a => `${a.x},${a.y}`;
    const d = this.props.moved
      ? `M ${p(startLoc)} Q ${p(controlLoc)} ${p(endLoc)}`
      : `M ${p(startLoc)} L ${p(endLoc)}`;
    return <path {...baseProps} d={d} />;
  }
}

export default Edge;
