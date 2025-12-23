import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import toggle icons
import { gsap } from 'gsap';


const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certificate' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef([]);
  const ballRef = useRef(null);

  useEffect(() => {
    // Entrance Animation: Links drop down like scoreboard flip-disps
    const tl = gsap.timeline();

    tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    ).fromTo(linksRef.current,
      { rotationX: -90, opacity: 0 },
      {
        rotationX: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      },
      "-=0.4"
    );
  }, []);

  // Ball Movement Logic
  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.id === active);
    const activeLinkEl = linksRef.current[activeIndex];

    if (activeLinkEl && ballRef.current) {
      // Get position relative to the navbar container
      // Note: This simple logic assumes horizontal desktop layout.
      // For mobile, we might hide the ball or adjust logic.



      // Calculate center of the active link item
      const linkRect = activeLinkEl.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      const relativeLeft = linkRect.left - navRect.left + (linkRect.width / 2);

      gsap.to(ballRef.current, {
        left: relativeLeft,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    }
  }, [active]);


  const handleScroll = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__left">

        <div className="navbar__logo">PORTFOLIO</div>
      </div>

      <div className="navbar__center">
        <ul className={`navbar__links ${open ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.id} ref={el => linksRef.current[index] = el}>
              <button
                className={active === link.id ? 'active' : ''}
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <div className="nav-ball" ref={ballRef}></div>
        </ul>
      </div>

      <div className="navbar__right">
        <div className="navbar__socials">
          <a href="https://github.com/yuvanshankars" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/yuvanshankar-s-78aa622a7/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 