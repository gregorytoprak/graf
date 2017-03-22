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
    const width = length * 2 / Math.sqrt(3); // equilateral
    const qor = 2 * Math.PI / 4;
    const leftPt = pt.move(tipPt, length, dir + 2 * qor);
    const topPt = pt.move(leftPt, width / 2, dir + qor);
    const botPt = pt.move(leftPt, width / 2, dir - qor);
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
