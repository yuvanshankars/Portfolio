import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import './Certifications.css';

import azureCert from '../assets/azure.pdf';
// import apexCert from '../assets/apex.pdf'; // File not found yet

const certifications = [
  { name: 'Microsoft Azure-102', file: azureCert },
  { name: 'Oracle APEX certification', file: null }
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleView = (file) => {
    if (file) {
      setSelectedCert(file);
    } else {
      alert("Certificate file available soon!");
    }
  };

  return (
    <section className="certifications" id="certifications" data-aos="fade-up">
      <h2 className="section-title"> <span className="title-highlight">Certifications</span></h2>
      <ul className="certifications__list">
        {certifications.map((cert, index) => (
          <li key={cert.name} className="cert-item" style={{ animationDelay: `${index * 0.15}s` }}>
            <span className="cert-name">{cert.name}</span>
            <button className="cert-view-btn" onClick={() => handleView(cert.file)}>
              <FontAwesomeIcon icon={faEye} /> View Certificate
            </button>
          </li>
        ))}
      </ul>

      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal__content" onClick={e => e.stopPropagation()}>
            <button className="cert-modal__close" onClick={() => setSelectedCert(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <iframe src={selectedCert} title="Certificate" className="cert-modal__frame"></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications; 