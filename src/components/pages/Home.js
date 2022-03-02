import React from "react";
import "./Pages.css";
import pfp from "../assets/shaunPFP.png"

function Home() {
  
  return (
    <>
      <div id="container">
        <div id="writing-container">
          <h1 className="page-title">Hi my name is Shaun.</h1>
          <h2 className="page-description">
            Contact me <a className="link-deco" href="https://linktr.ee/shaunkhundker"><b>here</b></a>!
          </h2>
        </div>
        <div id="my-image">
          <img
            id="profile-image"
            alt="Shaun Khundker's Headshot"
            src={pfp}
          ></img>
        </div>

      </div>
    </>
  );
}

export default Home;
