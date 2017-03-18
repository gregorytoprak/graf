import React, { Component } from "react";
import {
  ButtonGroup,
  OverlayTrigger,
  Popover,
  Button,
  Glyphicon
} from "react-bootstrap";
import { CirclePicker } from "react-color";

class Sidebar extends Component {
  render() {
    return (
      <ButtonGroup className="Sidebar" vertical>
        <Button onClick={this.props.toggleWelcome}>
          <Glyphicon glyph="menu-hamburger" />
        </Button>
        <OverlayTrigger
          placement="right"
          trigger="click"
          rootClose
          containerPadding={40}
          overlay={
            <Popover
              className="StyleEditor"
              id="style-editor"
              title="Style Editor"
            >
              <h4>Set color of selected</h4>
              <ButtonGroup>
                <Button onClick={() => this.props.fullSelect(true)}>
                  Select All
                </Button>
                <Button onClick={() => this.props.fullSelect(false)}>
                  Select None
                </Button>
                <Button onClick={() => this.props.resetColor()}>
                  Reset Color
                </Button>
              </ButtonGroup>
              <div className="ColorPickerWrapper">
                <CirclePicker onChange={this.props.setColor} />
              </div>
            </Popover>
          }
        >
          <Button><Glyphicon glyph="sunglasses" /></Button>
        </OverlayTrigger>
      </ButtonGroup>
    );
  }
}

export default Sidebar;
