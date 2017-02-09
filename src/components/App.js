import React, { Component } from 'react'
import Sheet from './Sheet'
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
            <Sheet />
          </Col>
          <Col xs={2}>
            <h3>Sidebar</h3>
            <p>Click around!</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
