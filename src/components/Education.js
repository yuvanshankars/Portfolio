import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Kongu Engineering College',
    CGPA: '7.15',
    innings: '2nd Innings (2023 - Present)'
  },
  {
    degree: 'HSC',
    institution: 'State Board',
    CGPA: '79.0%',
    innings: '1st Innings (2022 - 2023)'
  },

];

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title"> <span className="title-highlight">Education</span></h2>
      <div className="education__timeline">
        {education.map((item, index) => (
          <div className="education__over" key={index}>
            <div className="timeline-marker"></div>
            <div className="education__card">
              <span className="innings-label">{item.innings}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <div className="score-badge">
                <span>{item.CGPA}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education; 