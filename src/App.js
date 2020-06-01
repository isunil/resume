import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navigation";
import MainContent from "./containers/mainContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default App;
