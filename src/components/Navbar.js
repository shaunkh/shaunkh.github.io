import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import shaunLogo from "../imgs/Shaun Logo-02.png";

function Navbar() {
  const navStyle = {
    color: "white",
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
          <div>
            <img
              className="nav-logo"
              alt="Shaun Khundker's Logo"
              src={shaunLogo}
            ></img>
          </div>
        </Link>

        <div className="nav-div">
          <ul className="nav-links">
            <Link style={navStyle} to="/work">
              <li>Resume</li>
            </Link>
            <Link style={navStyle} to={{ pathname: "https://shaunkh.xyz" }} target="_blank">
            <li>Blog</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
