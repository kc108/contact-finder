import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

// import axios
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    // REASON FOR LOADING: moment before data is fetched
    loading: false,
    alert: null,
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
  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data);
  //   // Want to reset state
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search GitHub Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    //console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    // Want to reset state
    // .items added due to pagination *******
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // SAME THING
    // this.setState({ alert: { msg: msg, type: type } });

    // ADD TIME OUT TO MAKE ALERT GO AWAY
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    // const numbers = [1, 2, 3, 4];

    const { users, loading } = this.state;

    return (
      <div className="App">
        {/* <Navbar title="Github Finder" icon="fab fa-github" /> --- set as default above */}
        {/* <Navbar title={numbers} /> */}
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
