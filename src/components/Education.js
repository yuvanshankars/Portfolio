import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Kongu Engineering College',
    score: 'CGPA: 7.1',
  },
  {
    degree: 'HSC',
    institution: 'State Board',
    score: '79.0%',
  },
  {
    degree: 'SSLC',
    institution: 'State Board',
    score: 'ALL PASS',
  },
];

function Education() {
  return (
    <section className="education" id="education" data-aos="fade-up">
      <h2 className="section-title">Education</h2>
      <div className="education__list">
        {education.map((item) => (
          <div className="education__card" key={item.degree}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{item.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education; 