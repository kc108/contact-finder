// rce -> shortcut
// import React, { Component } from "react";

import React from "react";
// impt -> shortcut
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// *** CLASS COMPONENTS ***
// class UserItem extends Component {
//   //   constructor() {
//   //     super();
//   //     this.state = {
//   //       id: "id",
//   //       login: "mojombo",
//   //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//   //       html_url: "https://github.com/mojombo",
//   //     };
//   // }

//   // No Longer Using state, we are using Props instead because this is what the USER is being passed in as
//   //   state = {
//   //     id: "id",
//   //     login: "mojombo",
//   //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//   //     html_url: "https://github.com/mojombo",
//   //   };

//   render() {
//     // destructured to get rid of the 'this.state.' in front of line 28 and 31
//     const { login, avatar_url, html_url } = this.props.user;

//     return (
//       <div className="card text-center">
//         <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className="btn btn-dark btn-sm my-1">
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// const UserItem = (props) => {
//   const { login, avatar_url, html_url } = props.user;

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt="individual person"
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  // pta => shortcut
  user: PropTypes.object.isRequired,
};

export default UserItem;
