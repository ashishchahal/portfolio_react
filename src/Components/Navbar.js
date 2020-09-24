import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navOption">Home</div>
      </Link>
      <Link to="/aboutMe">
        <div className="navOption">About Me</div>
      </Link>
      <Link to="/projects">
        <div className="navOption">Projects</div>
      </Link>
      <Link to="/contactMe">
        <div className="navOption">Contact Me</div>
      </Link>
    </div>
  );
}

export default Navbar;
