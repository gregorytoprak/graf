import React, { Component } from "react";

class Control extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    const grabLoc = this.props.getLoc(e);
    const { startLoc, endLoc } = this.props;
    const loc = {
      x: (startLoc.x + endLoc.x) / 2 + this.props.controlx - grabLoc.x,
      y: (startLoc.y + endLoc.y) / 2 + this.props.controly - grabLoc.y
    };
    this.props.moveControlHand(loc);
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
    if (!this.props.complete || !this.props.selected) {
      return null;
    }
    const { startLoc, endLoc } = this.props;
    const loc = {
      cx: (startLoc.x + endLoc.x) / 2 + this.props.controlx,
      cy: (startLoc.y + endLoc.y) / 2 + this.props.controly
    };
    return (
      <circle
        className="Control"
        cx={loc.cx}
        cy={loc.cy}
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
