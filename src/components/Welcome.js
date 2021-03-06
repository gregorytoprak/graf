import React, { Component } from "react"
import {
  Modal,
  ButtonToolbar,
  Button,
  OverlayTrigger,
  Tooltip,
  DropdownButton,
  MenuItem,
  Glyphicon,
} from "react-bootstrap"

class Welcome extends Component {
  render() {
    return (
      <Modal
        className="Welcome"
        show={this.props.welcomeVisible}
        onHide={this.props.toggleWelcome}
      >
        <Modal.Header>
          <Modal.Title componentClass="h1">
            Graph Maker <small>graf.gregorytoprak.com</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Draw mathematical graphs with an intuitive drag-and-drop interface!
          </p>
          <h3>Usage</h3>
          <ul>
            <li>Double-click to create a node</li>
            <li>Create an edge by command-dragging from node to node</li>
            <li>Create an axis by command-double-clicking the empty sheet</li>
            <li>Click to select; shift-click to delete</li>
            <li>Each edge has a handle to control its curvature</li>
            <li>Drag-and-drop a node or handle to position it</li>
            <li>
              Edit colors, arrows on edges, and leg-count on axes in the{" "}
              <Glyphicon glyph="sunglasses" /> menu
            </li>
            <li>Pan and zoom like a map application</li>
            <li>Automatic saving to cookies</li>
            <li>Manual saving to svg</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.props.toggleWelcome}>
              Continue
            </Button>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="open-menu">
                  Depending on browser, saves as 'graph.svg' or 'Unknown'
                </Tooltip>
              }
            >
              <Button bsStyle="success" onClick={this.props.download}>
                Download SVG
              </Button>
            </OverlayTrigger>
            <DropdownButton id="new-graph" bsStyle="danger" title="New Graph">
              <MenuItem onClick={this.props.newGraph}>Empty Graph</MenuItem>
            </DropdownButton>
            <Button href="https://github.com/gregorytoprak/graf/">
              GitHub
            </Button>
            <Button bsStyle="link" href="https://gregorytoprak.com/">
              by GDT
            </Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Welcome
