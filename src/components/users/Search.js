import React, { Component } from "react";

import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  // Requires the search for a GitHub User
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  // If you do NOT use an Arrow Function, you have to bind this to our function (such as line 19 for the onSubmit function)
  // *** 'THIS' works differently with ARROW FUNCTIONS
  //   onSubmit(e) {
  //     e.preventDefault();
  //     console.log(this.state.text);
  //   }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        {/* <form onSubmit={this.onSubmit.bind(this)} className="form"> */}
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
