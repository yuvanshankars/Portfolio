import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Smart Attendance System',
    description: 'A web-based facial recognition system for automated student attendance, reducing manual errors and saving time.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenCV'],
    link: 'https://github.com/your-github/smart-attendance',
    demo: '',

  },
  {
    title: 'Health Insurance Premium',
    description: 'Healthcare Premium Predictor is a web app that calculates your BMI and estimates health insurance premiums based on your age, height, and weight.',
    tech: ['HTML', 'CSS(Tailwind)', 'JavaScript'],
    link: 'https://github.com/your-github/portfolio',
    demo: '',

  },
  {
    title: 'Posture Correction',
    description: 'A wearable posture correction system using ESP32 and dual MPU6050 sensors (neck and hip) to detect forward leaning.',
    tech: ['ESP32', 'MPU6050', 'Arduino IDE', 'Buzzer'],
    link: 'https://github.com/your-github/ecommerce-api',
    demo: '',

  },
  {
    title: 'Expenses Tracker',
    description: 'A web app that allows users to track their expenses and view their spending habits.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/yuvanshankars/Financial-Compass',
    demo: '',

  },
];

function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reveal animation
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // Cards pop up one by one like scorecards
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <h2 className="section-title"> <span className="title-highlight">Projects</span></h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div
            className="project__card"
            key={project.title}
            ref={el => cardsRef.current[index] = el}
          >
            <div className="project__header">
              <span className="match-type">{project.matchType}</span>
              <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project__tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="project__links">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-replay">
                <FontAwesomeIcon icon={faPlay} /> Replay (Code)
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 