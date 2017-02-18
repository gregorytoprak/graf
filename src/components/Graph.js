import React, { Component } from 'react'
import Node from './Node'
import Edge from './Edge'

class Graph extends Component {
  state = {
    dims: { cx: 0, cy: 0, w: 25, h: 25 },
    cursor: 'crosshair',
    grabbed: { type: 'EMPTY', data: {} },
    nodes: [],
    edges: []
  }

  getRawDims = () => {
    const r = document.getElementsByTagName('svg')[0].getBoundingClientRect()
    return {
      x: r.left, y: r.top, w: r.width, h: r.height
    }
  }

  getLoc = (event) => {
    const rawLoc = { x: event.clientX, y: event.clientY }
    const rawDims = this.getRawDims()
    const unitLoc = {
      x: (rawLoc.x - rawDims.x) / rawDims.w,
      y: (rawLoc.y - rawDims.y) / rawDims.h
    }
    return {
      x: (unitLoc.x * this.state.dims.w) + (this.state.dims.cx - this.state.dims.w / 2),
      y: (unitLoc.y * this.state.dims.h) + (this.state.dims.cy - this.state.dims.h / 2)
    }
  }

  // handlers

  handleWheel = (e) => {
    e.preventDefault()
    if (this.state.grabbed.type === 'EMPTY') {
      const zoomLoc = this.getLoc(e)
      this.zoomGround(zoomLoc, e.deltaY)
    }
  }

  handleMouseDown = (e) => {
    if (!e.shiftKey && this.state.grabbed.type === 'EMPTY') {
      const grabLoc = this.getLoc(e)
      this.groundPanGrabbed(grabLoc)
    }
  }

  handleMouseMove = (e) => {
    const g = this.state.grabbed
    const loc = this.getLoc(e)
    if (g.type === 'PAN_GROUND') {
      this.panGround(loc, g.data.grabLoc)
    } else if (g.type === 'NODE') {
      this.moveNode(loc, g.data.id, g.data.relLoc)
    } else if (g.type === 'EDGE') {
      this.moveEdge(loc, g.data.id, g.data.relLoc)
    } else if (g.type === 'NEW_EDGE') {
      this.moveNewEdge(loc, g.data.id)
    }
  }

  handleMouseUp = (e) => {
    if (this.state.grabbed.type === 'PAN_GROUND') {
      this.groundReleased()
    } else if (this.state.grabbed.type === 'NEW_EDGE') {
      this.edgeDropped()
    }
  }

  handleClick = (e) => {
    if (!e.shiftKey && this.state.grabbed.type === 'EMPTY') {
      // this.selectGround()
    }
  }

  handleDoubleClick = (e) => {
    if (!e.shiftKey && this.state.grabbed.type === 'EMPTY') {
      this.createNode(this.getLoc(e))
    }
  }

  // grabbing mechanics

  groundPanGrabbed = (grabLoc) => {
    this.setState({
      grabbed: { type: 'PAN_GROUND', data: { grabLoc } }
    })
  }

  groundReleased = () => {
    this.setState({
      cursor: 'crosshair',
      grabbed: { type: 'EMPTY', data: {} }
    })
  }

  nodeGrabbed = (nodeId, center, event) => {
    if (this.state.grabbed.type === 'EMPTY') {
      const grabLoc = this.getLoc(event)
      const relLoc = {
        x: center.x - grabLoc.x,
        y: center.y - grabLoc.y
      }
      this.setState({
        grabbed: { type: 'NODE', data: { id: nodeId, relLoc } }
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

  edgeGrabbed = (edgeId, controlCenter, event) => {
    if (this.state.grabbed.type === 'EMPTY') {
      const grabLoc = this.getLoc(event)
      const relLoc = {
        x: controlCenter.x - grabLoc.x,
        y: controlCenter.y - grabLoc.y
      }
      this.setState({
        grabbed: { type: 'EDGE', data: { id: edgeId, relLoc } }
      })
    }
  }

  edgeReleased = () => {
    if (this.state.grabbed.type === 'EDGE') {
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

  edgeDropped = () => {
    this.deleteEdge(this.state.grabbed.data.id)
    this.setState({
      grabbed: { type: 'EMPTY', data: {} }
    })
  }

  // ground state

  panGround = (loc, grabLoc) => {
    this.setState({
      cursor: 'all-scroll',
      dims: {
        ...this.state.dims,
        cx: this.state.dims.cx + grabLoc.x - loc.x,
        cy: this.state.dims.cy + grabLoc.y - loc.y
      }
    })
  }

  zoomGround = (zoomLoc, deltaY) => {
    const zoomFactor = 1.02 ** deltaY
    const olds = this.state.dims
    this.setState({
      dims: {
        cx: olds.cx * zoomFactor + zoomLoc.x * (1 - zoomFactor),
        cy: olds.cy * zoomFactor + zoomLoc.y * (1 - zoomFactor),
          // Consider the lines from the corners of the original view box to the location
          // we're zooming in on. In order to maintain both the proportionality of
          // the sides and the coordinates of the cursor, the new, zoomed, view box
          // will be inset at the same proportion along all four of those lines. This
          // gives us the parametric equation for the point t/1 between A and B as
          // C(t) = (1-t)A + (t)B. From here, see that our 'zoom factor' of the width
          // and height is actually proportional to the remaining distance (1-t) because
          // of similar triangles... I don't have time to find a better explanation.
        w: olds.w * zoomFactor,
        h: olds.h * zoomFactor
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
      selected: false,
      curved: false,
      controlLoc: null
    }
    this.setState({ edges: [...this.state.edges, edge] })
    return edge.id
  }

  deleteEdge = (edgeId) => {
    this.setState({
      edges: this.state.edges.filter(edge => edge.id !== edgeId)
    })
  }

  straightenEdge = (edgeId) => {
    this.setState({
      edges: this.state.edges.map(edge => {
        if (edge.id === edgeId) {
          return {
            ...edge,
            selected: false,
            curved: false,
            controlLoc: null
          }
        } else {
          return edge
        }
      })
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

  moveEdge = (loc, edgeId, relLoc) => {
    this.setState({
      edges: this.state.edges.map(edge => {
        if (edge.id === edgeId) {
          return {
            ...edge,
            moving: true,
            curved: true,
            controlLoc: {
              x: loc.x + relLoc.x,
              y: loc.y + relLoc.y
            }
          }
        } else {
          return edge
        }
      })
    })
  }

  moveNewEdge = (loc, edgeId) => {
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
        deleteNode={this.deleteNode}
        toggleSelectNode={this.toggleSelectNode}
        nodeGrabbed={this.nodeGrabbed}
        nodeReleased={this.nodeReleased}
        edgeStarted={this.edgeStarted}
        edgeEnded={this.edgeEnded}
      />
    )
  }

  renderEdge = (edge) => {
    const midpoint = (a, b) => ({
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2
    })
    const startLoc = this.state.nodes.find(node => node.id === edge.startNodeId).loc
    let endLoc
    if (edge.endNodeId !== null) {
      const endNode = this.state.nodes.find(node => node.id === edge.endNodeId)
      endLoc = endNode.loc
    } else {
      endLoc = edge.endLoc
    }
    return (
      <Edge key={edge.id} {...edge}
        startLoc={startLoc} endLoc={endLoc}
        controlLoc={edge.curved ? edge.controlLoc : midpoint(startLoc, endLoc)}
        edgeGrabbed={this.edgeGrabbed}
        edgeReleased={this.edgeReleased}
        deleteEdge={this.deleteEdge}
        straightenEdge={this.straightenEdge}
        toggleSelectEdge={this.toggleSelectEdge}
      />
    )
  }

  render () {
    const d = this.state.dims
    const viewBox = [d.cx - d.w / 2, d.cy - d.h / 2, d.w, d.h].join(' ')
    return (
      <svg className='Graph' viewBox={viewBox}
        style={{ cursor: this.state.cursor }}
        onScroll={this.handleScroll}
        onWheel={this.handleWheel}
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
