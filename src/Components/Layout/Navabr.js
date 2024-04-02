import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h2>
          <i className={props.icon} /> {props.title}
        </h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li href='/about'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github Find Me",
  icon: "fab fa-github"
};
Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  icon: Proptypes.string.isRequired
};

export default Navbar;
