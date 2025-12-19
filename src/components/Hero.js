import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

import profileImg from '../assets/profile.jpg';
import resumePDF from '../assets/Resume.pdf';

function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero__content">
        <div className="hero__img-wrapper">
          <img src={profileImg} alt="Yuvanshankar S" className="hero__img" />
        </div>
        <div className="hero__info">
          <h1>Yuvanshankar S</h1>
          <h2>Aspiring Mern Stack Developer <span className="hero__divider">|</span> CSE Student at Kongu Engineering College</h2>
          <div className="hero__actions">
            <a href={resumePDF} className="hero__resume" download>Download Resume</a>
            <button className="hero__resume-view" onClick={() => setShowResume(true)}>
              View Resume
            </button>
            <div className="hero__socials">
              <a href="https://github.com/yuvanshankars" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/yuvanshankar-s-78aa622a7/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showResume && (
        <div className="resume-modal" onClick={() => setShowResume(false)}>
          <div className="resume-modal__content" onClick={e => e.stopPropagation()}>
            <button className="resume-modal__close" onClick={() => setShowResume(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <iframe src={resumePDF} title="Resume" className="resume-modal__frame"></iframe>
          </div>
        </div>
      )}

      <div className="hero__scroll-indicator">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

export default Hero; 