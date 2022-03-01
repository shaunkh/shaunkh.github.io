import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
      </div> */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            {/* <Link to='/' className='social-logo'>
              <p>Shaun Khundker</p>
            </Link> */}
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/shaunkhundker/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//twitter.com/shaunkhundker'
              }
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.linkedin.com/in/shaun-khundker/'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.github.com/shaunkh/'
              }
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;