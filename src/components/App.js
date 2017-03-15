import React, { Component } from "react";
import WelcomeContainer from "../containers/WelcomeContainer";
import SidebarContainer from "../containers/SidebarContainer";
import SheetContainer from "../containers/SheetContainer";
import { download } from "../utils";

class App extends Component {
  state = { welcomeVisible: true };

  hideWelcome = () => {
    this.setState({ welcomeVisible: false });
  };

  showWelcome = () => {
    this.setState({ welcomeVisible: true });
  };

  render() {
    return (
      <div className="App">
        <WelcomeContainer
          show={this.state.welcomeVisible}
          hide={this.hideWelcome}
          download={download}
        />
        <SidebarContainer showWelcome={this.showWelcome} />
        <SheetContainer />
      </div>
    );
  }
}

export default App;
