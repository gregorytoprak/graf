import React, { Component } from 'react'
import Node from './Node'
import Edge from './Edge'

class Graph extends Component {
  state = {
    dims: { x: 0, y: 0, w: 20, h: 20 },
    grabbed: { type: 'EMPTY', data: {} },
    nodes: [],
    edges: []
  }

  getRawDims = () => {
    const r = document.getElementsByTagName('svg')[0].getBoundingClientRect()
    return {
      x: r.left,
      y: r.top,
      w: r.right - r.left,
      h: r.bottom - r.top
    }
  }

  getLoc = (e) => {
    const rawLoc = { x: e.clientX, y: e.clientY }
    const rawDims = this.getRawDims()
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
    if (this.state.grabbed.type === 'EMPTY') {
      this.createNode(this.getLoc(e))
    }
  }

  handleMouseMove = (e) => {
    if (this.state.grabbed.type === 'NODE') {
      this.moveNode(this.state.grabbed.data.id, this.getLoc(e))
    } else if (this.state.grabbed.type === 'NEW_EDGE') {
      this.moveNewEdge(this.state.grabbed.data.id, this.getLoc(e))
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
        grabbed: { type: 'NODE', data: { id: nodeId } }
      })
    }
  }

  nodeReleased = () => {
    if (this.state.grabbed.type === 'NODE') {
      this.setState({
        grabbed: { type: 'EMPTY', data: {} }
      })
    }
  }

  edgeStarted = (startNodeId) => {
    if (this.state.grabbed.type === 'EMPTY') {
      const newEdgeId = this.createEdge(startNodeId)
      this.setState({
        grabbed: { type: 'NEW_EDGE', data: { id: newEdgeId, startNodeId: startNodeId } }
      })
    }
  }

  edgeEnded = (endNodeId) => {
    if (this.state.grabbed.type === 'NEW_EDGE') {
      this.completeEdge(this.state.grabbed.data.id, endNodeId)
      this.setState({
        grabbed: { type: 'EMPTY', data: {} }
      })
    }
  }

  edgeReleased = () => {
    if (this.state.grabbed.type === 'NEW_EDGE') {
      this.deleteEdge(this.state.grabbed.data.id)
      this.setState({
        grabbed: { type: 'EMPTY', data: {} }
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

  moveNode = (nodeId, loc) => {
    this.setState({
      nodes: this.state.nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            loc: loc
          }
        } else {
          return node
        }
      })
    })
  }

  createEdge = (startNodeId) => {
    const edge = {
      id: Date.now(),
      startNodeId: startNodeId,
      endNodeId: null,
      endLoc: this.state.nodes.find(node => node.id === startNodeId).loc
    }
    this.setState({ edges: [...this.state.edges, edge] })
    return edge.id
  }

  moveNewEdge = (edgeId, loc) => {
    this.setState({
      edges: this.state.edges.map(edge => {
        if (edge.id === edgeId) {
          return {
            ...edge,
            endLoc: loc
          }
        } else {
          return edge
        }
      })
    })
  }

  completeEdge = (edgeId, endNodeId) => {
    this.setState({
      edges: this.state.edges.map(edge => {
        if (edge.id === edgeId) {
          return {
            ...edge,
            endNodeId: endNodeId,
            endLoc: null
          }
        } else {
          return edge
        }
      })
    })
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
    let endLoc
    if (edge.endNodeId !== null) {
      const endNode = this.state.nodes.find(node => node.id === edge.endNodeId)
      endLoc = endNode.loc
    } else {
      endLoc = edge.endLoc
    }
    return (
      <Edge key={edge.id} id={edge.id}
        startLoc={startNode.loc}
        endLoc={endLoc}
        deleteEdge={this.deleteEdge}
      />
    )
  }

  render () {
    const viewBox = `${this.state.dims.x} ${this.state.dims.y} ${this.state.dims.w} ${this.state.dims.h}`
    return (
      <svg className='Graph' viewBox={viewBox}
        width={0}
        height={0}
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
