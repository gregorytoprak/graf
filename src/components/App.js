import React, { Component } from "react";
import WelcomeContainer from "../containers/WelcomeContainer";
import SidebarContainer from "../containers/SidebarContainer";
import SheetContainer from "../containers/SheetContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeContainer />
        <SidebarContainer />
        <SheetContainer />
      </div>
    );
  }
}

export default App;
