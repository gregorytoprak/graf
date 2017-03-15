import React, { Component } from "react";

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
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onClick: this.handleClick,
      onDoubleClick: this.handleDoubleClick
    };
    if (this.props.loop) {
      return (
        <circle
          {...baseProps}
          fill="transparent"
          cx={this.props.startLoc.x}
          cy={this.props.startLoc.y - 1}
          r="1"
        />
      );
    }
    const startLoc = this.props.startLoc;
    const endLoc = this.props.complete
      ? this.props.endLoc
      : this.props.hand.loc;
    const controlLoc = { x: this.props.controlx, y: this.props.controly };
    const p = a => `${a.x},${a.y}`;
    return (
      <path
        {...baseProps}
        fill="none"
        d={
          this.props.curved
            ? `M ${p(startLoc)} Q ${p(controlLoc)} ${p(endLoc)}`
            : `M ${p(startLoc)} L ${p(endLoc)}`
        }
      />
    );
  }
}

export default Edge;
