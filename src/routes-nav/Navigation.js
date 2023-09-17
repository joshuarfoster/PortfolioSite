import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css"; // Import the CSS file


function Navigation() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/" activeClassName="active-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/projects" activeClassName="active-link">
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/resume" activeClassName="active-link">
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
