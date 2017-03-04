import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, PageHeader, Button } from 'react-bootstrap'
import { viewport } from 'verge'
import { resizeViewport } from '../actions/sheet'
import { clear } from '../actions/meta'
import { persistence } from '../utils'

class Welcome extends Component {
  newGraph = () => {
    persistence.clear()
    this.props.dispatch(clear())
    this.props.dispatch(resizeViewport(viewport()))
    this.props.close()
  }

  render () {
    if (!this.props.show) { return null }
    return (
      <Modal.Dialog className='Welcome'>
        <Modal.Header>
          <PageHeader>Graph Maker <small>graph.gdt.io</small></PageHeader>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Create a node: double-click</li>
            <li>Move a node: drag</li>
            <li>Create an edge: command-drag from one node to another</li>
            <li>Curve an edge: select then drag handle</li>
            <li>Select a node or edge: click</li>
            <li>Delete a node or edge: shift-click</li>
            <li>Pan the sheet: drag</li>
            <li>Zoom the sheet: scroll</li>
            <li>Automatic saving to local storage</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='danger' onClick={this.newGraph}>Clear</Button>
          <Button bsStyle='primary' onClick={this.props.close}>Continue</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default connect()(Welcome)
