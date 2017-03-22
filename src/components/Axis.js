import React, { Component } from "react";
import range from "lodash/range";
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
    const relGrabPt = vec.sub(this.props.unitLoc, grabPt);
    const originPt = this.props.originPt;
    this.props.moveAxisUnitHand(relGrabPt, originPt);
  };

  handleMouseUp = e => {
    this.props.emptyHand();
  };

  handleClickOrigin = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.deleteAxis();
    } else if (!e.metaKey) {
      this.props.selectAxis();
    }
  };

  handleClickUnit = e => {
    e.stopPropagation();
    if (e.shiftKey) {
      this.props.alignAxis();
    } else if (!e.metaKey) {
      this.props.selectAxis();
    }
  };

  handleDoubleClick = e => {
    e.stopPropagation();
  };

  render() {
    const originPt = this.props.originPt;
    const unitPt = vec.add(originPt, this.props.unitLoc);
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
                onClick={this.handleClickOrigin}
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
                onClick={this.handleClickUnit}
                onDoubleClick={this.handleDoubleClick}
              />
            </g>
          : null}
        <AxisPlace
          key="0,0"
          num={this.props.num}
          selected={this.props.selected}
          handleClick={this.handleClickOrigin}
          handleDoubleClick={this.handleDoubleClick}
          placePt={originPt}
          outDir={pt.dirToward([0, 0], this.props.unitLoc)}
          magnetNode={this.props.magnetNode}
          magnetEdgeHandle={this.props.magnetEdgeHandle}
          magnetAxisOrigin={this.props.magnetAxisOrigin}
          magnetAxisUnit={this.props.magnetAxisUnit}
          hand={this.props.hand}
          emptyHand={this.props.emptyHand}
        />
        {range(this.props.num).map(k => {
          const n = this.props.num;
          const tau = 2 * Math.PI;
          const outDir = tau * k / n + pt.dirToward([0, 0], this.props.unitLoc);
          return range(1, 26).map(distNum => {
            const dist = distNum * vec.len(this.props.unitLoc);
            const placePt = pt.move(originPt, dist, outDir);
            return (
              <AxisPlace
                key={`${k},${distNum}`}
                num={false}
                selected={this.props.selected}
                handleClick={this.handleClickOrigin}
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
