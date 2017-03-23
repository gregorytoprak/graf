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
    const basePropsHandle = {
      r: "0.5",
      stroke: this.props.selected ? "silver" : "black",
      strokeWidth: "0.05",
      fill: "white",
      onMouseUp: this.handleMouseUp,
      onDoubleClick: this.handleDoubleClick
    };
    const basePropsPlace = {
      selected: this.props.selected,
      handleClick: this.handleClickOrigin,
      handleDoubleClick: this.handleDoubleClick,
      magnetNode: this.props.magnetNode,
      magnetEdgeHandle: this.props.magnetEdgeHandle,
      magnetAxisOrigin: this.props.magnetAxisOrigin,
      magnetAxisUnit: this.props.magnetAxisUnit,
      hand: this.props.hand,
      emptyHand: this.props.emptyHand
    };
    return (
      <g>
        {this.props.selected
          ? <g>
              <circle
                {...basePropsHandle}
                className="AxisOrigin"
                cx={originPt[0]}
                cy={originPt[1]}
                onMouseDown={this.handleMouseDownOrigin}
                onClick={this.handleClickOrigin}
              />
              <circle
                {...basePropsHandle}
                className="AxisUnit"
                cx={unitPt[0]}
                cy={unitPt[1]}
                onMouseDown={this.handleMouseDownUnit}
                onClick={this.handleClickUnit}
              />
            </g>
          : null}
        <AxisPlace
          {...basePropsPlace}
          key="0,0"
          num={this.props.num}
          placePt={originPt}
          outDir={pt.dirToward([0, 0], this.props.unitLoc)}
        />
        {range(this.props.num).map(k => {
          const n = this.props.num;
          const qor = 2 * Math.PI / 4;
          const outDir = 4 * qor * k / n +
            pt.dirToward([0, 0], this.props.unitLoc);
          return range(1, 26).map(distNum => {
            const dist = distNum * vec.len(this.props.unitLoc);
            const placePt = pt.move(originPt, dist, outDir);
            return (
              <AxisPlace
                {...basePropsPlace}
                key={`${k},${distNum}`}
                placePt={placePt}
                outDir={outDir}
              />
            );
          });
        })}
      </g>
    );
  }
}

export default Axis;
