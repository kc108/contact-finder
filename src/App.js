import React, { Component, Fragment } from "react";

// Import React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

// import axios
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
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

  // Get Single GitHub User
  getUser = async (username) => {
    this.setState({ loading: true });
    //console.log(text);

    const res = await axios.get(
      `https://api.github.com/users?q=${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    // Want to reset state
    // .items added due to pagination *******
    this.setState({ users: res.data, loading: false });
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

    const { user, users, loading } = this.state;

    return (
      <Router>
        <div className="App">
          {/* <Navbar title="Github Finder" icon="fab fa-github" /> --- set as default above */}
          {/* <Navbar title={numbers} /> */}
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
