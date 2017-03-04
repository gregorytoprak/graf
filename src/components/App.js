import React, { Component } from 'react'
import SheetContainer from '../containers/SheetContainer'
import WelcomeContainer from '../containers/WelcomeContainer'
import { Button, Glyphicon } from 'react-bootstrap'

class App extends Component {
  state = { welcomeVisible: true }

  hideWelcome = () => {
    this.setState({ welcomeVisible: false })
  }

  showWelcome = () => {
    this.setState({ welcomeVisible: true })
  }

  render () {
    return (
      <div className='App'>
        <Button className='opener' onClick={this.showWelcome}>
          <Glyphicon glyph='menu-hamburger' />
        </Button>
        <WelcomeContainer show={this.state.welcomeVisible} hide={this.hideWelcome} />
        <SheetContainer />
      </div>
    )
  }
}

export default App
