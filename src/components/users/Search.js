import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  // If you do NOT use an Arrow Function, you have to bind this to our function (such as line 19 for the onSubmit function)
  // *** 'THIS' works differently with ARROW FUNCTIONS
  //   onSubmit(e) {
  //     e.preventDefault();
  //     console.log(this.state.text);
  //   }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
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
      </div>
    );
  }
}

export default Search;
