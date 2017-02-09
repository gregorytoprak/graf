import React, { Component } from 'react'

class Sheet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      realDims: {w: 100, h: 100},
      rawSheetCoords: {},
      nodes: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.renderNode = this.renderNode.bind(this)
  }

  componentDidMount () {
    const r = document.getElementById('Sheet').getBoundingClientRect()
    this.setState({rawSheetCoords: {
      x: r.left,
      y: r.top,
      w: r.right - r.left,
      h: r.bottom - r.top
    }})
  }

  handleClick (event) {
    event.persist()
    const click = { x: event.pageX, y: event.pageY }
    const sheet = this.state.rawSheetCoords
    const node = {
      key: this.state.nodes.length,
      cx: (click.x - sheet.x) * this.state.realDims.w / sheet.w,
      cy: (click.y - sheet.y) * this.state.realDims.h / sheet.h
    }
    this.setState({nodes: [...this.state.nodes, node]})
  }

  renderNode (node) {
    return (
      <circle key={node.key} fill='black' cx={node.cx} cy={node.cy} r='1' />
    )
  }

  render () {
    const viewBox = `0 0 ${this.state.realDims.w} ${this.state.realDims.h}`
    return (
      <svg id='Sheet' className='Sheet' style={{background: '#282'}} viewBox={viewBox} onClick={this.handleClick}>
        {this.state.nodes.map(this.renderNode)}
      </svg>
    )
  }
}

export default Sheet
