import React from "react";
import "./Pages.css";
import pfp from "../assets/shaunPFP.png";

function Home() {
  return (
    <>
      <div id="container">
        <div id="my-image">
          <img
            id="profile-image"
            alt="Shaun Khundker's Headshot"
            src={pfp}
          ></img>
          <div id="about-container">
            <h1 className="page-title">Hi, my name is Shaun Khundker.</h1>
            <div className="title-main">
            <pre className="page-title">I like to </pre>
              <div className="title">
                <div className="title-wrapper">
                  <div className="title-item">build.</div>
                  <div className="title-item">research.</div>
                  <div className="title-item">write.</div>
                  <div className="title-item">trade.</div>
                </div>
              </div>
            </div>
            <h2 className="page-description">I spend any free time I get researching
            DeFi protocols, buying NFTs and building things I find cool. I also like to play
            guitar and race.</h2>
            <h2 className="page-description">
              Contact me{" "}
              <a className="link-deco" href="https://linktr.ee/shaunkhundker">
                <b>here</b>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
