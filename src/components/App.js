import React, { Component } from 'react'
import Graph from './Graph'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <Grid className='App' fluid>
        <Row>
          <Col xs={10} xsOffset={1}>
            <PageHeader>Graph Maker <small>graph.gdt.io</small></PageHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={1}>
            <Graph />
          </Col>
          <Col xs={2}>
            <h3>Functionality</h3>
            <p>Double-click to create a node.</p>
            <p>Drag and drop a node to move it.</p>
            <p>Cmd-drag from one node to another to create an edge between them.</p>
            <p>Shift-click a node or edge to delete it.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
