import React, { Component } from 'react'
import { ButtonToolbar, ButtonGroup, Button, OverlayTrigger, Tooltip, Glyphicon } from 'react-bootstrap'

class Sidebar extends Component {
  render () {
    return (
      <ButtonToolbar className='Sidebar'>
        <ButtonGroup vertical>
          <OverlayTrigger placement='right' overlay={<Tooltip id='open-menu'>Open Menu</Tooltip>}>
            <Button onClick={this.props.showWelcome}>
              <Glyphicon glyph='menu-hamburger' />
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
        <ButtonGroup vertical>
          <OverlayTrigger placement='right' overlay={<Tooltip id='create-node'>A - Create Node</Tooltip>}>
            <Button>
              <Glyphicon glyph='star' />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement='right' overlay={<Tooltip id='create-edge'>S - Create Edge</Tooltip>}>
            <Button>
              <Glyphicon glyph='flash' />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement='right' overlay={<Tooltip id='create-axis'>D - Create Axis</Tooltip>}>
            <Button disabled>
              <Glyphicon glyph='fullscreen' />
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}

export default Sidebar
