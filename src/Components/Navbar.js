import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";
import DevicesIcon from "@material-ui/icons/Devices";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <HomeIcon />
        <div className="navOption">Home</div>
      </Link>
      <Link to="/aboutMe">
        <InfoIcon />
        <div className="navOption">About Me</div>
      </Link>
      <Link to="/projects">
        <DevicesIcon />
        <div className="navOption">Projects</div>
      </Link>
      <Link to="/contactMe">
        <ContactsIcon />
        <div className="navOption">Contact Me</div>
      </Link>
    </div>
  );
}

export default Navbar;
