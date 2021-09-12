import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4];

    return (
      <div className="App">
        {/* <Navbar title="Github Finder" icon="fab fa-github" /> --- set as default above */}
        {/* <Navbar title={numbers} /> */}
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
