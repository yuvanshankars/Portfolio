import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internship from './components/Internship';
import Education from './components/Education';
import Contact from './components/Contact';
import CricketCursor from './components/CricketCursor';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CricketCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Internship />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App; 