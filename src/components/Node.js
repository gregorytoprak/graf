import React, { Component } from "react";
import { START_EDGE_HAND } from "../actions/hand";
import { vec } from "../utils";

class Node extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    const grabLoc = this.props.getLoc(e);
    if (e.metaKey) {
      this.props.startEdge();
      this.props.startEdgeHand(grabLoc);
    } else {
      const relGrabLoc = vec.sub(this.props.nodePt, grabLoc);
      this.props.moveNodeHand(relGrabLoc);
    }
  };

  handleMouseUp = e => {
    e.stopPropagation();
    const h = this.props.hand;
    if (h.palm === START_EDGE_HAND) {
      this.props.completeEdge();
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
    const loc = this.props.nodePt;
    return (
      <circle
        className="Node"
        cx={loc[0]}
        cy={loc[1]}
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
