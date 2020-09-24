import React from "react";
import "../Styles/Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <h3>Header</h3>
    </div>
  );
}

export default Header;
