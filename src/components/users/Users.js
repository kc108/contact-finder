// import React, { Component } from "react";
import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner.js";
import PropTypes from "prop-types";

// class Users extends Component {
// *** USERS ARE BEING CHANGED TO COME IN THRU PROPS
//   state = {
//     users: [
//       {
//         id: "1",
//         login: "mojombo",
//         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//         html_url: "https://github.com/mojombo",
//       },
//       {
//         id: "2",
//         login: "defunkt",
//         avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
//         html_url: "https://github.com/defunkt",
//       },
//       {
//         id: "3",
//         login: "pyhyett",
//         avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
//         html_url: "https://github.com/pjhyett",
//       },
//     ],
//   };

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/* {this.state.users.map((user) => ( */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
