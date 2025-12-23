import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faGitAlt, faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode, faDatabase, faLeaf, faServer
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  { name: 'C', icon: faCode },
  { name: 'C++', icon: faCode },
  { name: 'Java', icon: faJava },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Express.js', icon: faServer },
  { name: 'MySQL', icon: faDatabase },
  { name: 'MongoDB', icon: faLeaf },
  { name: 'Git', icon: faGitAlt },
  { name: 'GitHub', icon: faGithub },

];

function Skills() {
  const containerRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    // Reset any previous animations
    gsap.set(skillsRef.current, { clearProps: 'all' });

    // Bowling Animation
    gsap.fromTo(skillsRef.current,
      {
        x: 200, // Start from the right (bowler's run-up direction)
        y: 100, // Optionally slightly down
        opacity: 0,
        scale: 0.5,
        rotation: 360 // Spin like a ball
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1, // Rapid fire delivery
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Start when top of section is 80% down viewport
        }
      }
    );
  }, []);

  return (
    <section className="skills" id="skills" ref={containerRef}>
      <h2 className="section-title">Skills</h2>

      <div className="skills__grid">
        {allSkills.map((skill, index) => (
          <div
            className="skill-item"
            key={index}
            ref={el => skillsRef.current[index] = el}
          >
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 