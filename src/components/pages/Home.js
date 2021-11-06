import React from "react";
import "./Pages.css";
import pfp from "../assets/shaunPFP.png"

function Home() {
  
  return (
    <>
      <div id="container">
        <div id="writing-container">
          <h1 className="page-title">Hi my name is Shaun.</h1>
        </div>
        <div id="my-image">
          <img
            id="profile-image"
            alt="Shaun Khundker's Headshot"
            src={pfp}
          ></img>
        </div>
        <div className="desc-container-no-margin">
          <h2 className="page-description">
            I'm a senior at Northeastern University majoring in Computer Science and Finance.
            I love to talk about all things crypto, e-commerce, and esports.
          </h2>
        </div>

        <div className="desc-container-no-margin">
          <h2 className="page-description page-description-two">
            Contact me <a className="link-deco" href="https://linktr.ee/shaunkhundker"><b>here</b></a>!
          </h2>
        </div>

      </div>
    </>
  );
}

export default Home;
