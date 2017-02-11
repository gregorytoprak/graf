import React, { Component } from 'react'
import Graph from './Graph'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Graph Maker <small>graph.gdt.io</small></h1>
        <div className='container'>
          <Graph />
        </div>
      </div>
    )
  }
}

export default App
