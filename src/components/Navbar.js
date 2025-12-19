import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavItem from './NavItem';

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
      <div className="navbar__left">
        <div className="navbar__logo">Profile</div>
      </div>

      <div className="navbar__center">
        <ul className={`navbar__links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavItem key={link.id} id={link.id} label={link.label} active={active} onClick={handleScroll} />
          ))}
        </ul>
      </div>

      <div className="navbar__right">
        <div className="navbar__socials">
          <a href="https://github.com/yuvanshankars" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/yuvanshankar-s-78aa622a7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <button
          className={`navbar__toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {/* <div className="navbar__darkmode">🌙</div> */}
    </nav>
  );
}

export default Navbar; 