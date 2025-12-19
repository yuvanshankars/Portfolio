import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faGitAlt, faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode, faDatabase, faLeaf, faServer, faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const skillsRow1 = [
  { name: 'C', icon: faCode },
  { name: 'C++', icon: faCode },
  { name: 'Java', icon: faJava },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
];

const skillsRow2 = [
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Express.js', icon: faServer },
  { name: 'MySQL', icon: faDatabase },
  { name: 'MongoDB', icon: faLeaf }, // Using leaf as visual proxy for Mongo if brand missing
  { name: 'Git', icon: faGitAlt },
  { name: 'GitHub', icon: faGithub },
  { name: 'Problem Solving', icon: faLightbulb },
];

function Skills() {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills</h2>

      <div className="skills__marquee">
        <div className="skills__track">
          {[...skillsRow1, ...skillsRow1].map((skill, index) => (
            <div className="skill-item" key={`row1-${index}`}>
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills__marquee skills__marquee--reverse">
        <div className="skills__track">
          {[...skillsRow2, ...skillsRow2].map((skill, index) => (
            <div className="skill-item" key={`row2-${index}`}>
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 