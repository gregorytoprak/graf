import React, { Component } from "react";
import { vec } from "../utils";

class Axis extends Component {
  handleMouseDownOrigin = e => {
    e.stopPropagation();
    const grabPt = this.props.getPt(e);
    const relGrabPt = vec.sub(this.props.originPt, grabPt);
    this.props.moveAxisOriginHand(relGrabPt);
  };

  handleMouseDownUnit = e => {
    e.stopPropagation();
    const grabPt = this.props.getPt(e);
    const relGrabPt = vec.sub(this.props.unitPt, grabPt);
    this.props.moveAxisUnitHand(relGrabPt);
  };

  handleMouseUp = e => {
    this.props.emptyHand();
  };

  handleClick = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.deleteAxis();
    } else if (!e.metaKey) {
      this.props.selectAxis();
    }
  };

  handleDoubleClick = e => {
    e.stopPropagation();
  };

  render() {
    const originPt = this.props.originPt;
    const unitPt = this.props.unitPt;
    return (
      <g>
        <circle
          className="AxisOrigin"
          cx={originPt[0]}
          cy={originPt[1]}
          r="0.5"
          stroke={this.props.selected ? "dodgerblue" : "black"}
          strokeWidth="0.05"
          fill="white"
          onMouseDown={this.handleMouseDownOrigin}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
        />
        <circle
          className="AxisUnit"
          cx={unitPt[0]}
          cy={unitPt[1]}
          r="0.5"
          stroke={this.props.selected ? "dodgerblue" : "black"}
          strokeWidth="0.05"
          fill="white"
          onMouseDown={this.handleMouseDownUnit}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
        />
      </g>
    );
  }
}

export default Axis;
