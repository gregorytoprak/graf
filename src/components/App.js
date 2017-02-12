import React, { Component } from 'react'
import Graph from './Graph'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Graph Maker <small>graph.gdt.io</small></h1>
        <ul className='usage'>
          <li>Double-click to create a node.</li>
          <li>Click a node to select it.</li>
          <li>Drag and drop a node to move it.</li>
          <li>Cmd-drag from one node to another to create an edge between them.</li>
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
