import React, { Component } from "react";
import { MOVE_NODE_HAND, MOVE_EDGE_HANDLE_HAND } from "../actions/hand";
import { pt } from "../utils";

class AxisPlace extends Component {
  handleMouseUp = e => {
    e.stopPropagation();
    const h = this.props.hand;
    if (h.palm === MOVE_NODE_HAND) {
      this.props.magnetNode(h.id, this.props.placePt);
    } else if (h.palm === MOVE_EDGE_HANDLE_HAND) {
      this.props.magnetEdgeHandle(h.id, this.props.placePt);
    }
    this.props.emptyHand();
  };

  render() {
    const { placePt, outDir } = this.props;
    const p = x => `${x[0]},${x[1]}`;
    const crossWidth = 0.5;
    const qor = 2 * Math.PI / 4;
    const crossPts = [0, 1, 2, 3].map(dirNum =>
      pt.move(placePt, crossWidth / 2, outDir + dirNum * qor));
    const h = this.props.hand;
    const active = h.palm === MOVE_NODE_HAND ||
      h.palm === MOVE_EDGE_HANDLE_HAND;
    return (
      <g>
        <path
          className="AxisPlaceCross"
          stroke={this.props.selected ? "dodgerblue" : "black"}
          strokeWidth="0.05"
          fill="none"
          d={
            `M ${p(crossPts[0])} L ${p(crossPts[2])}
             M ${p(crossPts[1])} L ${p(crossPts[3])}`
          }
          onClick={this.props.handleClick}
          onDoubleClick={this.props.handleDoubleClick}
        />
        <circle
          className="AxisPlaceArea"
          cx={placePt[0]}
          cy={placePt[1]}
          r="1"
          stroke="none"
          fill={active ? "transparent" : "none"}
          onMouseUp={this.handleMouseUp}
        />
      </g>
    );
  }
}

export default AxisPlace;
