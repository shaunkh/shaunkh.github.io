import React from "react";
import "./Pages.css";
import shaunPicture from "Z:/CS Projects/shaunkh.github.io/src/imgs/Capture.png";

function About() {
  return (
    <div>
      <h1 className="page-title">TLDR</h1>
      <div>
        <ul className="about-tldr">
          <li>
            Born in New York. Lived up in Bangladesh, then Dubai, then Singapore
          </li>
          <li>
            Currently in <b>Boston, MA</b>
          </li>
          <li>Pursuing Computer Science and Finance Major at Northeastern University</li>
          <li>Love math. Started programming and building projects in the 9th grade.</li>
          <li>Interests in cryptocurrency, equity trading and esports</li>
          <li>I write about these topics too</li>
        </ul>
      </div>

      <h1 className="page-title">About Me</h1>
      <div className="about-container">
        <div>
        <h3 className="about-desc">
          Living in Boston pursuing my degree in Computer Science and Finance at Northeastern University. If that wasn't interesting to you already, how did I get here?
          Well... it started when my parents moved to... Just kidding, I'm not going that far. I was born in New York and moved to Bangladesh with my grandma right after.
          After a couple of years I moved to Dubai with my parents and then to Singapore after another year. Went back and forth between Bangladesh and Singapore a couple times but 
          eventually graduated from a high school called UWCSEA Dover. Moved to Boston to start college at NEU as a CS major but added on the Finance part because I thought it would 
          be fun.
        </h3>
        <h3 className="about-desc">
          I started building projects in high school during my study hall periods. 
        </h3>
        </div>
        <img
          id="profile-image"
          alt="Shaun Khundker's Headshot"
          src={shaunPicture}
        ></img>
      </div>
    </div>
  );
}

export default About;
