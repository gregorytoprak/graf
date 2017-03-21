import React, { Component } from "react";
import AxisPlace from "./AxisPlace";
import { vec, pt } from "../utils";

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
    const range = n => [...Array(n).keys()];
    return (
      <g>
        {this.props.selected
          ? <g>
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
          : null}
        {range(this.props.num).map(k => {
          const n = this.props.num;
          const tau = 2 * Math.PI;
          const outDir = tau * (k / n) + pt.dirToward(originPt, unitPt);
          return range(25).map(distNum => {
            const dist = distNum * vec.len(vec.sub(unitPt, originPt));
            const placePt = pt.move(originPt, dist, outDir);
            return (
              <AxisPlace
                key={`${k},${distNum}`}
                selected={this.props.selected}
                handleClick={this.handleClick}
                handleDoubleClick={this.handleDoubleClick}
                placePt={placePt}
                outDir={outDir}
                magnetNode={this.props.magnetNode}
                magnetEdgeHandle={this.props.magnetEdgeHandle}
                magnetAxisOrigin={this.props.magnetAxisOrigin}
                magnetAxisUnit={this.props.magnetAxisUnit}
                hand={this.props.hand}
                emptyHand={this.props.emptyHand}
              />
            );
          });
        })}
      </g>
    );
  }
}

export default Axis;
