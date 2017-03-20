import React, { Component } from "react";
import { vec } from "../utils";

class Arrow extends Component {
  render() {
    const props = {
      ...this.props.baseProps,
      stroke: "none",
      fill: this.props.baseProps.stroke
    };
    const { endPt, dir } = this.props;
    const length = 0.5;
    const width = 0.5;
    const move = (basePt, dist, dir) => {
      const trig = [Math.cos(dir), Math.sin(dir)];
      return vec.add(basePt, vec.scl(dist, trig));
    };
    const tau = 2 * Math.PI;
    const leftPt = move(endPt, length, dir + tau / 2);
    const topPt = move(leftPt, width / 2, dir + tau / 4);
    const botPt = move(leftPt, width / 2, dir - tau / 4);
    const p = x => `${x[0]},${x[1]}`;
    const points = `${p(endPt)} ${p(topPt)} ${p(botPt)}`;
    return <polygon {...props} className="Arrow" points={points} />;
  }
}

export default Arrow;
