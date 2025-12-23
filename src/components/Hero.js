import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './Hero.css';

import profileImg from '../assets/profile.jpg';
import resumePDF from '../assets/Resume.pdf';

gsap.registerPlugin(TextPlugin);

function Hero() {
  const [showResume, setShowResume] = useState(false);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imgRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    // Initial Animation Timeline
    const tl = gsap.timeline();

    // 1. Profile Image Pop-in
    tl.fromTo(imgRef.current,
      { scale: 0, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }
    );

    // 2. Scoreboard Text Typing Effect
    tl.to(titleRef.current, {
      duration: 1.5,
      text: "Yuvanshankar S",
      ease: "none"
    });

    // 3. Subtitle Fade Up
    tl.fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // 4. Bouncing Ball Scroll Indicator
    gsap.to(ballRef.current, {
      y: 15,
      yoyo: true,
      repeat: -1,
      duration: 0.6,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__pitch-lines"></div> {/* Decorative Pitch Lines */}

      <div className="hero__content">
        <div className="hero__img-wrapper" ref={imgRef}>
          <img src={profileImg} alt="Yuvanshankar S" className="hero__img" />
          <div className="hero__stumps-bg"></div> {/* Decorative Stumps behind image */}
        </div>

        <div className="hero__info">
          <h1><span className="scoreboard-text" ref={titleRef}></span><span className="cursor-blink">|</span></h1>
          <div className="hero__subtitle-wrapper" ref={subtitleRef}>
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


    </section>
  );
}

export default Hero; 