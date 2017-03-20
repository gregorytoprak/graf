import React, { Component } from "react";
import Arrow from "./Arrow";
import { vec, pt } from "../utils";

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
      fill: "none",
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onClick: this.handleClick,
      onDoubleClick: this.handleDoubleClick
    };
    const { startPt, endPt } = this.props;
    const p = x => `${x[0]},${x[1]}`;
    const midPt = vec.scl(0.5, vec.add(startPt, endPt));
    if (!this.props.endNodeId) {
      const arrowTips = [pt.moveToward(startPt, 1, endPt), endPt];
      const linePts = [
        this.props.arrows[0]
          ? pt.moveToward(arrowTips[0], 0.25, endPt)
          : startPt,
        this.props.arrows[1]
          ? pt.moveToward(arrowTips[1], 0.25, startPt)
          : endPt
      ];
      return (
        <g>
          <path {...baseProps} d={`M ${p(linePts[0])} L ${p(linePts[1])}`} />
          {this.props.arrows[0]
            ? <Arrow
                baseProps={baseProps}
                tipPt={arrowTips[0]}
                dir={pt.dirToward(endPt, startPt)}
              />
            : null}
          {this.props.arrows[1]
            ? <Arrow
                baseProps={baseProps}
                tipPt={arrowTips[1]}
                dir={pt.dirToward(startPt, endPt)}
              />
            : null}
        </g>
      );
    } else if (this.props.startNodeId === this.props.endNodeId) {
      const loopCenterLoc = vec.scl(0.5, this.props.handleLoc);
      const centerPt = vec.add(midPt, loopCenterLoc);
      const r = vec.len(loopCenterLoc);
      return (
        <g>
          <circle {...baseProps} cx={centerPt[0]} cy={centerPt[1]} r={r} />
        </g>
      );
    } else {
      const controlPt = vec.add(midPt, this.props.handleLoc);
      const arrowTips = [
        pt.moveToward(startPt, 1, controlPt),
        pt.moveToward(endPt, 1, controlPt)
      ];
      const linePts = [
        this.props.arrows[0]
          ? pt.moveToward(arrowTips[0], 0.25, controlPt)
          : startPt,
        this.props.arrows[1]
          ? pt.moveToward(arrowTips[1], 0.25, controlPt)
          : endPt
      ];

      const d = `M ${p(linePts[0])} Q ${p(controlPt)} ${p(linePts[1])}`;
      return (
        <g>
          <path {...baseProps} d={d} />
          {this.props.arrows[0]
            ? <Arrow
                baseProps={baseProps}
                tipPt={arrowTips[0]}
                dir={pt.dirToward(controlPt, startPt)}
              />
            : null}
          {this.props.arrows[1]
            ? <Arrow
                baseProps={baseProps}
                tipPt={arrowTips[1]}
                dir={pt.dirToward(controlPt, endPt)}
              />
            : null}

        </g>
      );
    }
  }
}

export default Edge;
