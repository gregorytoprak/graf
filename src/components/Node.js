import React, { Component } from "react";

class Node extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    const grabLoc = this.props.getLoc(e);
    if (e.metaKey) {
      this.props.startEdge(grabLoc);
    } else {
      this.props.moveNodeHand(
        this.props.cx - grabLoc.x,
        this.props.cy - grabLoc.y
      );
    }
  };

  handleMouseUp = e => {
    e.stopPropagation();
    if (this.props.hand.palm === "startEdge") {
      this.props.completeEdge(this.props.hand.id);
    }
    this.props.emptyHand();
  };

  handleClick = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.deleteNode();
    } else if (!e.metaKey) {
      this.props.selectNode();
    }
  };

  handleDoubleClick = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <circle
        className="Node"
        cx={this.props.cx}
        cy={this.props.cy}
        r="1"
        stroke={
          this.props.selected
            ? "dodgerblue"
            : this.props.color ? this.props.color : "black"
        }
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

export default Node;
