import React, { Component } from 'react'
import Node from './Node'

class Sheet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      realDims: { w: 100, h: 100 },
      rawSheetCoords: {},
      nodes: []
    }

    this.createNode = this.createNode.bind(this)
    this.deleteNode = this.deleteNode.bind(this)
  }

  componentDidMount () {
    const r = document.getElementById('Sheet').getBoundingClientRect()
    const rawSheetCoords = {
      x: r.left,
      y: r.top,
      w: r.right - r.left,
      h: r.bottom - r.top
    }
    this.setState({ rawSheetCoords })
  }

  createNode (e) {
    if (e.shiftKey) { return }
    const sheet = this.state.rawSheetCoords
    const node = {
      id: Date.now(),
      cx: (e.pageX - sheet.x) * this.state.realDims.w / sheet.w,
      cy: (e.pageY - sheet.y) * this.state.realDims.h / sheet.h
    }
    this.setState({ nodes: [...this.state.nodes, node] })
  }

  deleteNode (nodeId) {
    this.setState({
      nodes: this.state.nodes.filter(node => node.id !== nodeId)
    })
  }

  render () {
    const viewBox = `0 0 ${this.state.realDims.w} ${this.state.realDims.h}`
    return (
      <svg id='Sheet' className='Sheet' style={{ background: '#bbb' }} viewBox={viewBox}
        onClick={this.createNode}
      >
        {this.state.nodes.map((node) =>
          <Node
            key={node.id}
            id={node.id}
            cx={node.cx}
            cy={node.cy}
            deleteNode={this.deleteNode}
          />
        )}
      </svg>
    )
  }
}

export default Sheet
