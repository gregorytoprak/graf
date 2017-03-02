import React, { Component } from 'react'
import SheetContainer from '../containers/SheetContainer'
import Welcome from './Welcome'

class App extends Component {
  state = { showWelcome: true }

  close = () => {
    this.setState({ showWelcome: false })
  }

  render () {
    return (
      <div className='App'>
        <SheetContainer />
        <Welcome show={this.state.showWelcome} close={this.close} />
      </div>
    )
  }
}

export default App
