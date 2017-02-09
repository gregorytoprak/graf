import React, { Component } from 'react'
import Page from './Page'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <Grid fluid><Row><Col xs={10} xsOffset={1}>
        <PageHeader>Graph Maker <small>graph.gdt.io</small></PageHeader>
        <Page />
      </Col></Row></Grid>
    )
  }
}

export default App
