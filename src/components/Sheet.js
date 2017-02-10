import React, { Component } from 'react'
import Node from './Node'

class Sheet extends Component {
  state = {
    dragging: { node: false, id: false },
    dims: { w: 100, h: 100 },
    rawDims: { x: 0, y: 0, w: 1, h: 1 },
    nodes: []
  }

  componentDidMount () {
    const r = document.getElementById('Sheet').getBoundingClientRect()
    const rawDims = {
      x: r.left,
      y: r.top,
      w: r.right - r.left,
      h: r.bottom - r.top
    }
    this.setState({ rawDims })
  }

  rawToReal = (rawLoc) => {
    return {
      x: (rawLoc.x - this.state.rawDims.x) * (this.state.dims.w / this.state.rawDims.w),
      y: (rawLoc.y - this.state.rawDims.y) * (this.state.dims.h / this.state.rawDims.h)
    }
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
      dragging: { node: true, id: nodeId }
    })
  }

  movedNode = (e) => {
    if (!this.state.dragging.node) { return }
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
      dragging: { node: false, id: false }
    })
  }

  render () {
    const viewBox = `0 0 ${this.state.dims.w} ${this.state.dims.h}`
    return (
      <svg id='Sheet' className='Sheet' style={{ background: '#bbb' }} viewBox={viewBox}
        onDoubleClick={this.createNode}
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

export default Sheet
