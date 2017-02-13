import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Graph from './Graph'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PageHeader>Graph Maker <small>graph.gdt.io</small></PageHeader>
        <ul className='usage'>
          <li>Double-click to create a node.</li>
          <li>Drag and drop a node to move it.</li>
          <li>Cmd-drag from one node to another to create an edge between them.</li>
          <li>Drag and drop the ground to pan it.</li>
          <li>Click a node or edge to select it.</li>
          <li>Shift-click a node or edge to delete it.</li>
        </ul>
        <div className='container'>
          <Graph />
        </div>
      </div>
    )
  }
}

export default App
