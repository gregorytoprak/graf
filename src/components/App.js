import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import WelcomeContainer from '../containers/WelcomeContainer'
import SheetContainer from '../containers/SheetContainer'
import { download } from '../utils'

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
        <WelcomeContainer
          show={this.state.welcomeVisible}
          hide={this.hideWelcome}
          download={download}
        />
        <Button className='opener' onClick={this.showWelcome}>
          <Glyphicon glyph='menu-hamburger' />
        </Button>
        <SheetContainer />
      </div>
    )
  }
}

export default App
