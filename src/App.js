import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

// import axios
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    // REASON FOR LOADING: moment before data is fetched
    loading: false,
  };

  // lifecycle method
  // *** USING PROMISES ***
  // USE THIS FOR WHEN YOU WANT A COMPONENT TO FIRE WHEN 1ST STARTING UP using Axios
  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then((res) => console.log(res.data));
  // }

  // *** USING ASYNC/AWAIT ***
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    // Want to reset state
    this.setState({ users: res.data, loading: false });
  }

  render() {
    // const numbers = [1, 2, 3, 4];

    return (
      <div className="App">
        {/* <Navbar title="Github Finder" icon="fab fa-github" /> --- set as default above */}
        {/* <Navbar title={numbers} /> */}
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
