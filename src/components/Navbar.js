import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'internship', label: 'Internship' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">YS</div>
      <ul className={`navbar__links ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              className={active === link.id ? 'active' : ''}
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
        <li className="navbar__socials">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <div className="navbar__toggle" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      {/* <div className="navbar__darkmode">🌙</div> */}
    </nav>
  );
}

export default Navbar; 