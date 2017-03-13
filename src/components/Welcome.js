import React, { Component } from 'react'
import { Modal, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap'

class Welcome extends Component {
  render () {
    return (
      <Modal className='Welcome' show={this.props.show} onHide={this.props.hide}>
        <Modal.Header>
          <Modal.Title componentClass='h1'>Graph Maker <small>graph.gdt.io</small></Modal.Title>
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
            <li>Automatic saving to cookies</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button bsStyle='primary' onClick={this.props.hide}>Continue</Button>
            <Button bsStyle='success' onClick={this.props.download}>Download</Button>
            <DropdownButton id='new-graph' bsStyle='danger' title='New Graph'>
              <MenuItem onClick={this.props.newGraph}>Empty Graph</MenuItem>
            </DropdownButton>
            <Button bsStyle='info' href='http://github.com/gdtoprak/graph-maker/'>GitHub</Button>
            <Button bsStyle='link' href='http://gdt.io/'>by GDT</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Welcome
