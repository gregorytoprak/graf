import React, { Component } from "react";
import { Button, FormGroup, InputGroup, FormControl } from "react-bootstrap";

class LegForm extends Component {
  state = { value: "" };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setLegs(this.state.value);
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form className="LegForm">
        <FormGroup controlId="legForm">
          <InputGroup>
            <FormControl
              type="number"
              placeholder="Enter Number"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button type="submit" onClick={this.handleSubmit}>
                Set
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default LegForm;
