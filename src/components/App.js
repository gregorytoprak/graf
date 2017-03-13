import React, { Component } from 'react'
import SheetContainer from '../containers/SheetContainer'
import WelcomeContainer from '../containers/WelcomeContainer'
import SidebarContainer from '../containers/SidebarContainer'
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
        <SidebarContainer
          showWelcome={this.showWelcome}
        />
        <WelcomeContainer
          show={this.state.welcomeVisible}
          hide={this.hideWelcome}
          download={download}
        />
        <SheetContainer />
      </div>
    )
  }
}

export default App
