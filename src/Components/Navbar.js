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
        <div className="navOption">
          <div className="navbar__icon">
            <HomeIcon />
          </div>
          <div className="navbar__option">Home</div>
        </div>
      </Link>
      <Link to="/aboutMe">
        <div className="navOption">
          <div className="navbar__icon">
            <InfoIcon />
          </div>

          <div className="navbar__option">About Me</div>
        </div>
      </Link>
      <Link to="/projects">
        <div className="navOption">
          <div className="navbar__icon">
            <DevicesIcon />
          </div>

          <div className="navbar__option">Projects</div>
        </div>
      </Link>
      <Link to="/contactMe">
        <div className="navOption">
          <div className="navbar__icon">
            <ContactsIcon />
          </div>

          <div className="navbar__option">Contact Me</div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
