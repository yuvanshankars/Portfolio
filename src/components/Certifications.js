import React from 'react';
import './Certifications.css';

const certifications = [
  
  'Microsoft Azure-102',
  'Oracle APEX certification'
];

function Certifications() {
  return (
    <section className="certifications" id="certifications" data-aos="fade-up">
      <h2 className="section-title">Certifications</h2>
      <ul className="certifications__list">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications; 