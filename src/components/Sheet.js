import React, { Component } from "react";
import NodeContainer from "../containers/NodeContainer";
import EdgeContainer from "../containers/EdgeContainer";
import ControlContainer from "../containers/ControlContainer";

class Sheet extends Component {
  getLoc = event => {
    const raw = { x: event.clientX, y: event.clientY };
    return {
      x: raw.x * (this.props.w / this.props.vw) +
        this.props.cx -
        this.props.w / 2,
      y: raw.y * (this.props.h / this.props.vh) +
        this.props.cy -
        this.props.h / 2
    };
  };

  handleWheel = e => {
    e.preventDefault();
    const zoomLoc = this.getLoc(e);
    let zoomFactor = 1.02 ** e.deltaY;
    if (this.props.h * zoomFactor > 100) {
      zoomFactor = 100 / this.props.h;
    } else if (this.props.h * zoomFactor < 1) {
      zoomFactor = 1 / this.props.h;
    }
    this.props.zoomSheet(zoomLoc, zoomFactor);
  };

  handleMouseDown = e => {
    const grabLoc = this.getLoc(e);
    this.props.panHand(grabLoc.x, grabLoc.y);
  };

  handleMouseMove = e => {
    if (this.props.hand.palm === "pan") {
      const moveLoc = this.getLoc(e);
      this.props.panSheet(
        this.props.hand.x - moveLoc.x,
        this.props.hand.y - moveLoc.y
      );
    } else if (this.props.hand.palm === "moveNode") {
      const moveLoc = this.getLoc(e);
      this.props.moveNode(
        this.props.hand.id,
        moveLoc.x + this.props.hand.x,
        moveLoc.y + this.props.hand.y
      );
    } else if (this.props.hand.palm === "startEdge") {
      const moveLoc = this.getLoc(e);
      this.props.startEdgeHand(this.props.hand.id, moveLoc);
    } else if (this.props.hand.palm === "moveControl") {
      const moveLoc = this.getLoc(e);
      const edge = this.props.edges.find(ed => ed.id === this.props.hand.id);
      const startNode = this.props.nodes.find(nd => nd.id === edge.startNodeId);
      this.props.moveControl(
        this.props.hand.id,
        edge.loop
          ? moveLoc.x + this.props.hand.loc.x - startNode.cx
          : moveLoc.x + this.props.hand.loc.x,
        edge.loop
          ? moveLoc.y + this.props.hand.loc.y - startNode.cy
          : moveLoc.y + this.props.hand.loc.y
      );
    }
  };

  handleMouseUp = e => {
    if (this.props.hand.palm === "startEdge") {
      this.props.deleteEdge(this.props.hand.id);
    }
    this.props.emptyHand();
  };

  handleDoubleClick = e => {
    const loc = this.getLoc(e);
    this.props.createNode(loc.x, loc.y);
  };

  render() {
    const viewBox = [
      this.props.cx - this.props.w / 2,
      this.props.cy - this.props.h / 2,
      this.props.w,
      this.props.h
    ].join(" ");
    return (
      <svg
        className="Sheet"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        onWheel={this.handleWheel}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onDoubleClick={this.handleDoubleClick}
      >
        {this.props.edgeIds.map(id => (
          <EdgeContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
        {this.props.nodeIds.map(id => (
          <NodeContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
        {this.props.edgeIds.map(id => (
          <ControlContainer key={id} id={id} getLoc={this.getLoc} />
        ))}
      </svg>
    );
  }
}

export default Sheet;
