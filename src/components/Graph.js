import React, { Component } from 'react'
import Node from './Node'

class Graph extends Component {
  state = {
    dims: { x: 0, y: 0, w: 20, h: 20 },
    dragging: { type: 'NONE', id: null },
    nodes: []
  }

  rawToReal = (rawLoc) => {
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

  createNode = (e) => {
    if (e.shiftKey) { return }
    const loc = this.rawToReal({ x: e.pageX, y: e.pageY })
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

  movingNode = (nodeId) => {
    this.setState({
      dragging: { type: 'NODE', id: nodeId }
    })
  }

  movedNode = (e) => {
    if (!this.state.dragging.type === 'NODE') { return }
    const newLoc = this.rawToReal({ x: e.pageX, y: e.pageY })
    this.setState({
      nodes: this.state.nodes.map(node => {
        if (node.id === this.state.dragging.id) {
          return {
            ...node,
            x: newLoc.x,
            y: newLoc.y
          }
        } else {
          return node
        }
      }),
      dragging: { type: 'NONE', id: null }
    })
  }

  render () {
    const viewBox = `${this.state.dims.x} ${this.state.dims.y} ${this.state.dims.w} ${this.state.dims.h}`
    return (
      <svg id='Graph' className='Graph' style={{ background: '#bbb' }} viewBox={viewBox}
        onClick={this.createNode}
        onMouseUp={this.movedNode}
      >
        {this.state.nodes.map((node) =>
          <Node key={node.id} {...node}
            deleteNode={this.deleteNode}
            movingNode={this.movingNode}
          />
        )}
      </svg>
    )
  }
}

export default Graph
