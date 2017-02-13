import React, { Component } from 'react'
import Node from './Node'
import Edge from './Edge'
import { getLoc } from '../utils'

class Graph extends Component {
  state = {
    dims: { x: 0, y: 0, w: 30, h: 30 },
    grabbed: { type: 'EMPTY', data: {} },
    nodes: [],
    edges: []
  }

  // handlers

  handleMouseDown = (e) => {
    if (!e.metaKey && !e.shiftKey && this.state.grabbed.type === 'EMPTY') {
      const grabLoc = getLoc(e, this.state.dims)
      this.groundGrabbed(grabLoc)
    }
  }

  handleMouseMove = (e) => {
    const g = this.state.grabbed
    const loc = getLoc(e, this.state.dims)
    if (g.type === 'GROUND') {
      this.moveGround(loc, g.data.grabLoc)
    } else if (g.type === 'NODE') {
      this.moveNode(loc, g.data.id, g.data.relLoc)
    } else if (g.type === 'NEW_EDGE') {
      this.moveNewEdge(g.data.id, loc)
    }
  }

  handleMouseUp = (e) => {
    if (this.state.grabbed.type === 'GROUND') {
      this.groundReleased()
    } else if (this.state.grabbed.type === 'NODE') {
      this.nodeReleased()
    } else if (this.state.grabbed.type === 'NEW_EDGE') {
      this.edgeReleased()
    }
  }

  handleClick = (e) => {
    if (!e.shiftKey && !e.metaKey && this.state.grabbed.type === 'EMPTY') {
      // this.selectGround()
    }
  }

  handleDoubleClick = (e) => {
    if (!e.shiftKey && !e.metaKey && this.state.grabbed.type === 'EMPTY') {
      this.createNode(getLoc(e, this.state.dims))
    }
  }

  // grabbing mechanics

  groundGrabbed = (grabLoc) => {
    this.setState({
      grabbed: { type: 'GROUND', data: { grabLoc } }
    })
  }

  groundReleased = () => {
    this.setState({
      grabbed: { type: 'EMPTY', data: {} }
    })
  }

  nodeGrabbed = (nodeId, relLoc) => {
    if (this.state.grabbed.type === 'EMPTY') {
      this.setState({
        grabbed: { type: 'NODE', data: { id: nodeId, relLoc } }
      })
    }
  }

  nodeReleased = () => {
    this.setState({
      grabbed: { type: 'EMPTY', data: {} }
    })
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
    this.deleteEdge(this.state.grabbed.data.id)
    this.setState({
      grabbed: { type: 'EMPTY', data: {} }
    })
  }

  // ground state

  moveGround = (loc, grabLoc) => {
    this.setState({
      dims: {
        ...this.state.dims,
        x: this.state.dims.x + grabLoc.x - loc.x,
        y: this.state.dims.y + grabLoc.y - loc.y
      }
    })
  }

  // node state

  createNode = (loc) => {
    const node = {
      id: Date.now(),
      loc: loc,
      moving: false,
      selected: false
    }
    this.setState({ nodes: [...this.state.nodes, node] })
  }

  deleteNode = (nodeId) => {
    this.setState({
      nodes: this.state.nodes.filter(node => node.id !== nodeId),
      edges: this.state.edges.filter(edge => edge.startNodeId !== nodeId && edge.endNodeId !== nodeId)
    })
  }

  toggleSelectNode = (nodeId) => {
    this.setState({
      nodes: this.state.nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            moving: false,
            selected: node.moving ? node.selected : !node.selected
          }
        } else {
          return node
        }
      })
    })
  }

  moveNode = (loc, nodeId, relLoc) => {
    this.setState({
      nodes: this.state.nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            moving: true,
            loc: {
              x: loc.x + relLoc.x,
              y: loc.y + relLoc.y
            }
          }
        } else {
          return node
        }
      })
    })
  }

  // edge state

  createEdge = (startNodeId) => {
    const startNode = this.state.nodes.find(node => node.id === startNodeId)
    const edge = {
      id: Date.now(),
      startNodeId: startNodeId,
      endNodeId: null,
      endLoc: startNode.loc,
      moving: false,
      selected: false
    }
    this.setState({ edges: [...this.state.edges, edge] })
    return edge.id
  }

  deleteEdge = (edgeId) => {
    this.setState({
      edges: this.state.edges.filter(edge => edge.id !== edgeId)
    })
  }

  toggleSelectEdge = (edgeId) => {
    this.setState({
      edges: this.state.edges.map(edge => {
        if (edge.id === edgeId) {
          return {
            ...edge,
            moving: false,
            selected: edge.moving ? edge.selected : !edge.selected
          }
        } else {
          return edge
        }
      })
    })
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

  // renders

  renderNode = (node) => {
    return (
      <Node key={node.id} {...node}
        dims={this.state.dims}
        deleteNode={this.deleteNode}
        toggleSelectNode={this.toggleSelectNode}
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
      <Edge key={edge.id} {...edge}
        startLoc={startNode.loc}
        endLoc={endLoc}
        deleteEdge={this.deleteEdge}
        toggleSelectEdge={this.toggleSelectEdge}
      />
    )
  }

  render () {
    const d = this.state.dims
    const viewBox = [d.x, d.y, d.w, d.h].join(' ')
    return (
      <svg className='Graph' viewBox={viewBox}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      >
        {this.state.edges.map(this.renderEdge)}
        {this.state.nodes.map(this.renderNode)}
      </svg>
    )
  }
}

export default Graph
