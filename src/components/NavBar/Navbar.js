import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-icon"></div>
      <div className="navbar-links">
        <h1 className="navbar-title">Into The TrotterVerse!</h1>
        <NavLink className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/trotters">
          Roster
        </NavLink>

        <NavLink className="navbar-link" to="/user-trotter">
          My Trotters
        </NavLink>
        <NavLink className="navbar-link" to="/user-trotter/new">
          <button className="button">Create-A-Trotter</button>

        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
