import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="section-title">About <span className="title-highlight">me</span></h2>

        <div className="about__stats-card">
          <div className="about__header">
            <h3>Yuvanshankar S</h3>
            <span className="player-role">Mern Stack Developer</span>
          </div>

          <p className="about__text">
            “As a Computer Science Engineering student, I'm at the crease focused on MERN-stack development. I've gained hands-on experience in projects involving real-time web applications. Now that I've officially started my MERN-stack innings, I'm eager to hit boundaries by building innovative and impactful solutions.”
          </p>


        </div>
      </div>
    </section>
  );
}

export default About; 