import React, { Component } from "react";
import { pt } from "../utils";

class Arrow extends Component {
  render() {
    const props = {
      ...this.props.baseProps,
      stroke: "none",
      fill: this.props.baseProps.stroke
    };
    const { tipPt, dir } = this.props;
    const length = 0.5;
    const width = 0.5;
    const tau = 2 * Math.PI;
    const leftPt = pt.move(tipPt, length, dir + tau / 2);
    const topPt = pt.move(leftPt, width / 2, dir + tau / 4);
    const botPt = pt.move(leftPt, width / 2, dir - tau / 4);
    const p = x => `${x[0]},${x[1]}`;
    return (
      <polygon
        {...props}
        className="Arrow"
        points={`${p(tipPt)} ${p(topPt)} ${p(botPt)}`}
      />
    );
  }
}

export default Arrow;
