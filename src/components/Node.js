import React, { Component } from 'react'

class Node extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    if (e.shiftKey) {
      this.props.deleteNode(this.props.id)
    }
  }

  render () {
    return (
      <circle id={this.props.id} fill='black' cx={this.props.cx} cy={this.props.cy} r='1'
        onClick={this.handleClick}
      />
    )
  }
}

export default Node
