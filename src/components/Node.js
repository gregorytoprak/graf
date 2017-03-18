import React, { Component } from "react";
import { START_EDGE_HAND } from "../actions/hand";
import { vec } from "../utils";

class Node extends Component {
  handleMouseDown = e => {
    e.stopPropagation();
    if (e.metaKey) {
      const handPt = this.props.getPt(e);
      this.props.startEdge();
      this.props.startEdgeHand(handPt);
    } else {
      const grabPt = this.props.getPt(e);
      const relGrabPt = vec.sub(this.props.pt, grabPt);
      this.props.moveNodeHand(relGrabPt);
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
    const centerPt = this.props.pt;
    return (
      <circle
        className="Node"
        cx={centerPt[0]}
        cy={centerPt[1]}
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
