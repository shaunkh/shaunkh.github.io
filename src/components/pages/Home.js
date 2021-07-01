import React from "react";
import "./Pages.css";
import shaunPicture from "Z:/CS Projects/shaunkh.github.io/src/imgs/Capture.png";

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
            src={shaunPicture}
          ></img>
        </div>
        <div id="desc-container">
          <h2 className="page-description">
            Welcome to my website. I'm a senior at Northeastern University.
            I study computer science and finance. My main interests are in blockchain and cryptocurrencies.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
