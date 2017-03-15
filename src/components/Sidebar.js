import React, { Component } from "react";
import { CirclePicker } from "react-color";
import {
  ButtonGroup,
  OverlayTrigger,
  Popover,
  Button,
  Glyphicon
} from "react-bootstrap";

class Sidebar extends Component {
  render() {
    const styleEditor = (
      <Popover className="StyleEditor" id="style-editor" title="Style Editor">
        <ButtonGroup>
          <Button onClick={() => this.props.fullSelect(true)}>
            Select All
          </Button>
          <Button onClick={() => this.props.fullSelect(false)}>
            Select None
          </Button>
        </ButtonGroup>
        <h4>Set color of selected</h4>
        <Button onClick={() => this.props.resetColors()}>Reset</Button>
        <div className="ColorPickerWrapper">
          <CirclePicker onChange={this.props.setColor} />
        </div>
      </Popover>
    );

    return (
      <ButtonGroup className="Sidebar" vertical>
        <Button onClick={this.props.showWelcome}>
          <Glyphicon glyph="menu-hamburger" />
        </Button>
        <OverlayTrigger
          placement="right"
          trigger="click"
          rootClose
          containerPadding={40}
          overlay={styleEditor}
        >
          <Button><Glyphicon glyph="sunglasses" /></Button>
        </OverlayTrigger>
      </ButtonGroup>
    );
  }
}

export default Sidebar;
