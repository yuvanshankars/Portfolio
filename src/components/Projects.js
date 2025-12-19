import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const projects = [
  {
    title: 'Smart Attendance System',
    description: 'A web-based facial recognition system for automated student attendance, reducing manual errors and saving time.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenCV'],
    link: 'https://github.com/your-github/smart-attendance',
    demo: '',
  },
  {
    title: 'Health Insurance Premiun Prediction',
    description: 'Healthcare Premium Predictor is a web app that calculates your BMI and estimates health insurance premiums based on your age, height, and weight.',
    tech: ['HTML', 'CSS(Tailwind)', 'JavaScript'],
    link: 'https://github.com/your-github/portfolio',
    demo: '',
  },
  {
    title: 'Posture Correction',
    description: 'A wearable posture correction system using ESP32 and dual MPU6050 sensors (neck and hip) to detect forward leaning. A buzzer alerts the user in real-time to maintain proper posture.',
    tech: ['ESP32', 'MPU6050', 'Arduino IDE', 'Buzzer for alerts'],
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
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div className="project__card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project__tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project__links">
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 