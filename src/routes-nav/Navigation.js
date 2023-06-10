import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css"; // Import the CSS file

function Navigation() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/resume">
          Resume
        </NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
