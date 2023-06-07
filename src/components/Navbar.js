import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import shaunLogo from "../imgs/Shaun Logo-02.png";

function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontFamily: "Barlow Condensed",
    fontSize: "2rem",
    margin: "0 10rem",
  };
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400&family=Bebas+Neue&display=swap');
      </style>

      <nav>
        <Link to="/">
          <div className="nav-div">
            <img
              className="nav-logo"
              alt="Shaun Khundker's Logo"
              src={shaunLogo}
            ></img>
          </div>
        </Link>
      </nav>
      <nav style={{ maxHeight: "40px", marginTop: "-85px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link style={linkStyle} to="/work">
            Work
          </Link>
          <Link
            style={linkStyle}
            to={{ pathname: "https://shaunkh.xyz" }}
            target="_blank"
          >
            Blog
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
