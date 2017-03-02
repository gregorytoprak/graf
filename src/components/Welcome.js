import React, { Component } from 'react'
import { Modal, PageHeader, Button } from 'react-bootstrap'

class Welcome extends Component {
  render () {
    if (!this.props.show) { return null }
    return (
      <Modal.Dialog>
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
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default Welcome
