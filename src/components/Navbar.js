import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import shaunLogo from "../imgs/Shaun Logo-02.png";

function Navbar() {
  const navStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400&family=Bebas+Neue&display=swap');
      </style>
      <nav>
        <Link to="/">
          <img
            className="nav-logo"
            alt="Shaun Khundker's Logo"
            src={shaunLogo}
          ></img>
        </Link>

        <div className="nav-div">
          <ul className="nav-links">
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
