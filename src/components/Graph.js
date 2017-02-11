import React, { Component } from 'react'
import Node from './Node'
import Edge from './Edge'

class Graph extends Component {
  state = {
    dims: { x: 0, y: 0, w: 20, h: 20 },
    grabbed: { type: 'EMPTY', id: null },
    nodes: [],
    edges: []
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
    } else if (this.state.grabbed.type === 'NEW_EDGE') {
      this.edgeReleased()
    }
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

  edgeStarted = (startNodeId) => {
    if (this.state.grabbed.type === 'EMPTY') {
      this.setState({
        grabbed: { type: 'NEW_EDGE', id: startNodeId }
      })
    }
  }

  edgeEnded = (endNodeId) => {
    if (this.state.grabbed.type === 'NEW_EDGE') {
      this.createEdge(this.state.grabbed.id, endNodeId)
      this.edgeReleased()
    }
  }

  edgeReleased = () => {
    if (this.state.grabbed.type === 'NEW_EDGE') {
      this.setState({
        grabbed: { type: 'EMPTY', id: null }
      })
    }
  }

  createNode = (loc) => {
    const node = {
      id: Date.now(),
      loc: loc
    }
    this.setState({ nodes: [...this.state.nodes, node] })
  }

  deleteNode = (nodeId) => {
    this.setState({
      nodes: this.state.nodes.filter(node => node.id !== nodeId),
      edges: this.state.edges.filter(edge => edge.startNodeId !== nodeId && edge.endNodeId !== nodeId)
    })
  }

  moveNode = (nodeId, newLoc) => {
    this.setState({
      nodes: this.state.nodes.map(node => {
        if (node.id === nodeId) {
          return {
            id: node.id,
            loc: newLoc
          }
        } else {
          return node
        }
      })
    })
  }

  createEdge = (startNodeId, endNodeId) => {
    const edge = {
      id: Date.now(),
      startNodeId,
      endNodeId
    }
    this.setState({ edges: [...this.state.edges, edge] })
  }

  deleteEdge = (edgeId) => {
    this.setState({
      edges: this.state.edges.filter(edge => edge.id !== edgeId)
    })
  }

  renderNode = (node) => {
    return (
      <Node key={node.id} id={node.id}
        loc={node.loc}
        deleteNode={this.deleteNode}
        nodeGrabbed={this.nodeGrabbed}
        edgeStarted={this.edgeStarted}
        edgeEnded={this.edgeEnded}
      />
    )
  }

  renderEdge = (edge) => {
    const startNode = this.state.nodes.find(node => node.id === edge.startNodeId)
    const endNode = this.state.nodes.find(node => node.id === edge.endNodeId)
    return (
      <Edge key={edge.id} id={edge.id}
        startLoc={startNode.loc}
        endLoc={endNode.loc}
        deleteEdge={this.deleteEdge}
      />
    )
  }

  render () {
    const viewBox = `${this.state.dims.x} ${this.state.dims.y} ${this.state.dims.w} ${this.state.dims.h}`
    return (
      <svg id='Graph' className='Graph' style={{ border: '1px solid black' }} viewBox={viewBox}
        onDoubleClick={this.handleDoubleClick}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        {this.state.edges.map(this.renderEdge)}
        {this.state.nodes.map(this.renderNode)}
      </svg>
    )
  }
}

export default Graph
