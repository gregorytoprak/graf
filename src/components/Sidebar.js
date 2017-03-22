import React, { Component } from "react";
import {
  ButtonGroup,
  OverlayTrigger,
  Popover,
  Button,
  DropdownButton,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
import { CirclePicker } from "react-color";
import LegForm from "./LegForm";

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
        <h4>Edit selected</h4>
        <ButtonGroup>
          <DropdownButton id="toggle-arrows" title="Toggle Arrows">
            <MenuItem onClick={() => this.props.toggleArrow(0)}>
              Reverse Arrow
            </MenuItem>
            <MenuItem onClick={() => this.props.toggleArrow(1)}>
              Forward Arrow
            </MenuItem>
          </DropdownButton>
          <Button onClick={() => this.props.resetColor()}>
            Reset Color
          </Button>
        </ButtonGroup>
        <h5>Set color</h5>
        <div className="ColorPickerWrapper">
          <CirclePicker onChange={this.props.setColor} />
        </div>
        <h5>Set the number of legs (for axes)</h5>
        <LegForm setLegs={this.props.setLegs} />
      </Popover>
    );
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
          overlay={styleEditor}
        >
          <Button><Glyphicon glyph="sunglasses" /></Button>
        </OverlayTrigger>
      </ButtonGroup>
    );
  }
}

export default Sidebar;
