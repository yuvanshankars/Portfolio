import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const containerRef = useRef(null);
  const screenRef = useRef(null);

  const handleReveal = () => {
    setIsRevealed(true);
    // Animate the screen turning on
    gsap.fromTo(screenRef.current,
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(screenRef.current, {
            boxShadow: '0 0 20px rgba(107, 203, 119, 0.4)',
            repeat: 5,
            yoyo: true,
            duration: 0.1
          });
        }
      }
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to('.contact__submit', { scale: 0.95, yoyo: true, repeat: 1 });

    // submit to backend API (public endpoint)
    fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then(async (res) => {
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        alert('Failed to send message: ' + (json.error || res.statusText));
      }
    }).catch((err) => {
      console.error(err);
      alert('Network error while sending message. Please make sure the server is running.');
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact <span className="title-highlight">me</span></h2>

      {!isRevealed ? (
        <div className="contact__trigger" onClick={handleReveal}>
          <div className="drs-button">
            <FontAwesomeIcon icon={faHandPaper} className="drs-icon" />
            <span>Send Message</span>
          </div>
          <p className="drs-hint">Click to send message</p>
        </div>
      ) : (
        <div className="contact__container" ref={containerRef}>
          <div className="stadium-screen" ref={screenRef}>
            <div className="screen-header">
              <span className="live-pill">LIVE</span>
              <span className="screen-title">DECISION PENDING...</span>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Player Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Appeal Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <button type="submit" className="contact__submit">
                {submitted ? 'DECISION: SENT' : ' SEND'}
              </button>
            </form>

            {submitted && <div className="decision-overlay">RECIVED</div>}
          </div>

          <div className="contact__info">
            <p>Email: <a href="mailto:yuvanshankar@gmail.com">yuvansekar10@gmail.com</a></p>
            <div className="contact__socials">
              <a href="https://github.com/yuvanshankars" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/yuvanshankar-s-78aa622a7/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact; 