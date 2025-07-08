import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

// Try to import the image with error handling
let profileImg;
try {
  profileImg = require('../assets/profile.jpg');
} catch (error) {
  console.error('Profile image not found:', error);
  // You can set a default image here if needed
  profileImg = ''; // Empty string as fallback
}

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero__content">
        {profileImg && (
          <div className="hero__img-wrapper">
            <img src={profileImg} alt="Yuvanshankar S" className="hero__img" />
          </div>
        )}
        <div className="hero__info">
          <h1>Yuvanshankar S</h1>
          <h2>Aspiring Full Stack Developer <span className="hero__divider">|</span> CSE Student at Kongu Engineering College</h2>
          <div className="hero__actions">
            <a href="/Yuvanshankar_Resume_final.pdf" className="hero__resume" download>Download Resume</a>
            <div className="hero__socials">
              <a href="https://github.com/yuvanshankars" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/yuvanshankar-sekar-78aa622a7" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

export default Hero; 