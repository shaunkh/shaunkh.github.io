import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import pfp from "../assets/shaunPFP.png";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <>
      <div id="container">
        <div id="homepage">
          <img
            id="profile-image"
            alt="Shaun Khundker's Headshot"
            src={pfp}
          ></img>
          <div id="about-container">
            <h1 className="page-title">
              Hi, my name is <b>Shaun Khundker</b>.
            </h1>
            <div className="title-main">
              <pre className="page-title">I </pre>
              <div className="title">
                <div className="title-wrapper">
                  <div className="title-item">code.</div>
                  <div className="title-item">build.</div>
                  <div className="title-item">write.</div>
                  <div className="title-item">trade.</div>
                </div>
              </div>
            </div>
            <h2 className="page-description">
              I'm a software engineer at{" "}
              <a href="https://withstable.com/">Peregrine Exploration</a>
            </h2>
            <h2 className="page-description">
              I like looking at JPEGs, finding new farming strategies in DeFi
              and building things.
            </h2>
            <h2 className="page-description">
              I also like playing guitar, skating and F1.
            </h2>
            <h2 className="page-description">Currently based in Miami/NYC.</h2>
            <section className="social-media">
              <div className="social-media-wrap">
                <div className="social-icons">
                  <Link
                    className="social-icon-link"
                    to="//www.instagram.com/shaunkhundker/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to={"//twitter.com/shaunkhundker"}
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to={"//www.linkedin.com/in/shaun-khundker/"}
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    className="social-icon-link"
                    to={"//www.github.com/shaunkh/"}
                    target="_blank"
                    aria-label="Github"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
