import React, { Component } from 'react'
import Node from './Node'

class Graph extends Component {
  state = {
    dims: { x: 0, y: 0, w: 20, h: 20 },
    grabbed: { type: 'EMPTY', id: null },
    nodes: []
  }

  handleDoubleClick = (e) => {
    this.createNode(this.getLoc(e))
  }

  handleMouseMove = (e) => {
    if (this.state.grabbed.type === 'NODE') {
      this.moveNode(this.state.grabbed.id, this.getLoc(e))
    }
  }

  handleMouseUp = (e) => {
    if (this.state.grabbed.type === 'NODE') {
      this.nodeReleased()
    }
  }

  getLoc = (e) => {
    const rawLoc = { x: e.clientX, y: e.clientY }
    const r = document.getElementsByTagName('svg')[0].getBoundingClientRect()
    const rawDims = {
      x: r.left, y: r.top, w: r.right - r.left, h: r.bottom - r.top
    }
    const unitLoc = {
      x: (rawLoc.x - rawDims.x) / rawDims.w,
      y: (rawLoc.y - rawDims.y) / rawDims.h
    }
    const loc = {
      x: (unitLoc.x * this.state.dims.w) + this.state.dims.x,
      y: (unitLoc.y * this.state.dims.h) + this.state.dims.y
    }
    return loc
  }

  createNode = (loc) => {
    const node = {
      id: Date.now(),
      x: loc.x,
      y: loc.y
    }
    this.setState({ nodes: [...this.state.nodes, node] })
  }

  deleteNode = (nodeId) => {
    this.setState({
      nodes: this.state.nodes.filter(node => node.id !== nodeId)
    })
  }

  moveNode = (nodeId, newLoc) => {
    this.setState({
      nodes: this.state.nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            x: newLoc.x,
            y: newLoc.y
          }
        } else {
          return node
        }
      })
    })
  }

  nodeGrabbed = (nodeId) => {
    if (this.state.grabbed.type === 'EMPTY') {
      this.setState({
        grabbed: { type: 'NODE', id: nodeId }
      })
    }
  }

  nodeReleased = () => {
    if (this.state.grabbed.type === 'NODE') {
      this.setState({
        grabbed: { type: 'EMPTY', id: null }
      })
    }
  }

  render () {
    const viewBox = `${this.state.dims.x} ${this.state.dims.y} ${this.state.dims.w} ${this.state.dims.h}`
    return (
      <svg id='Graph' className='Graph' style={{ background: '#bbb' }} viewBox={viewBox}
        onDoubleClick={this.handleDoubleClick}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        {this.state.nodes.map((node) =>
          <Node key={node.id} {...node}
            deleteNode={this.deleteNode}
            nodeGrabbed={this.nodeGrabbed}
          />
        )}
      </svg>
    )
  }
}

export default Graph
