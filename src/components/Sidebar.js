import React, { Component } from "react";
import flatten from "lodash/flatten";
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
    // [Red, Orange, Yellow, Green, Blue, Purple] x [A700, 500, 300]
    // from https://www.materialui.co/colors
    const colors = flatten([
      ["#D50000", "#FF6D00", "#FFD600", "#00C853", "#2962FF", "#AA00FF"],
      ["#F44336", "#FF9800", "#FFEB3B", "#4CAF50", "#2196F3", "#9C27B0"],
      ["#E57373", "#FFB74D", "#FFF176", "#81C784", "#64B5F6", "#BA68C8"]
    ]);
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
          <DropdownButton id="set-arrows" title="Set Arrows">
            <MenuItem onClick={() => this.props.setArrows([false, false])}>
              <Glyphicon glyph="minus" />
              <Glyphicon glyph="minus" />{" "}
              No Arrows
            </MenuItem>
            <MenuItem onClick={() => this.props.setArrows([false, true])}>
              <Glyphicon glyph="minus" />
              <Glyphicon glyph="arrow-right" />{" "}
              Head Arrow
            </MenuItem>
            <MenuItem onClick={() => this.props.setArrows([true, false])}>
              <Glyphicon glyph="arrow-left" />
              <Glyphicon glyph="minus" />{" "}
              Tail Arrow
            </MenuItem>
            <MenuItem onClick={() => this.props.setArrows([true, true])}>
              <Glyphicon glyph="arrow-left" />
              <Glyphicon glyph="arrow-right" />{" "}
              Both Arrows
            </MenuItem>
          </DropdownButton>
          <Button onClick={() => this.props.resetColor()}>
            Reset Color
          </Button>
        </ButtonGroup>
        <div className="ColorPickerWrapper">
          <CirclePicker onChange={this.props.setColor} colors={colors} />
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
