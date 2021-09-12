// import React, { Component } from "react";
import React from "react";
// impt -> shortcut
import PropTypes from "prop-types";

// export class Navbar extends Component {
//   // *** SETS DEFAULT PROPS ***
//   static defaultProps = {
//     title: "Github Finder",
//     icon: "fab fa-github",
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i className={this.props.icon} /> {this.props.title}
//           Navbar
//         </h1>
//       </nav>
//     );
//   }
// }

// const Navbar = (props) => {

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* <i className={props.icon} /> {props.title} */}
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

// *** SETS DEFAULT PROPS ***
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
