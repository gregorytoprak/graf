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

  download = () => {
    const svg = document.getElementsByClassName('Sheet')[0].outerHTML
    const a = document.createElement('a')
    a.href = encodeURI('data:image/svg,' + svg)
    a.download = 'graph.svg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  render () {
    return (
      <div className='App'>
        <Button className='opener' onClick={this.showWelcome}>
          <Glyphicon glyph='menu-hamburger' />
        </Button>
        <WelcomeContainer
          show={this.state.welcomeVisible}
          hide={this.hideWelcome}
          download={this.download}
        />
        <SheetContainer />
      </div>
    )
  }
}

export default App
