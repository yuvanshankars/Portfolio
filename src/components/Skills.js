import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Programming',
    items: ['C', 'C++', 'Java'],
  },
  {
    category: 'Web',
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
  {
    category: 'Soft Skills',
    items: ['Teamwork', 'Communication', 'Problem Solving', 'Adaptability'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills</h2>
      <div className="skills__grid">
        {skills.map((group) => (
          <div className="skills__group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 