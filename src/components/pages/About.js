import React from "react";
import "./Pages.css";

function About() {
  return (
    <div>
      <h1 className="page-title">TL;DR</h1>
      <div className="about-container">
        <ul className="about-tldr">
          <li>
            Born in New York. Lived up in Bangladesh, then Dubai, then Singapore
          </li>
          <li>
            Currently in <b>Boston, MA</b>
          </li>
          <li>
            Pursuing Computer Science and Finance Major at Northeastern
            University
          </li>
          <li>
            Love math. Started programming and building projects in the 9th
            grade.
          </li>
          <li>Interests in cryptocurrency, equity trading and esports</li>
          <li>I write about these topics too</li>
        </ul>
      </div>
     
      <h1 className="page-title">About Me</h1>
      <div className="about-container">
        <div>
          <h3 className="about-desc">
            I'm living in Boston pursuing my degree in Computer Science and
            Finance at Northeastern University. If that wasn't interesting to
            you already, how did I get here? Well... it started when my parents
            moved to... Just kidding, I'm not going that far. I was born in New
            York and moved to Bangladesh with my grandma right after. I moved to
            Dubai after a couple years and then to Singapore a year later. Went
            back and forth between Bangladesh and Singapore a couple times but
            eventually graduated from my high school: UWCSEA Dover. I moved to
            Boston to start college at NEU as a CS major but added on Finance
            because I thought it would be fun.
          </h3>
          <h3 className="about-desc">
            I started coding during my study hall periods in 9th grade. I
            started to build projects when I got to 10th grade and would try to
            automate anything I could. My favorite one so far was when I used to play Hearthstone.
            I didn't want to use spreadsheets to keep track of my performance so I created
            a tracker that would automatically record all my games from me. 
          </h3>
        </div>
        
      </div>
    </div>
  );
}

export default About;
