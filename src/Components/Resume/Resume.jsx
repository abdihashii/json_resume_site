import React from 'react';

// Components
import About from './About/About';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Leadership from './Leadership/Leadership';
import Interests from './Interests/Interests';

// CSS
import './resume.scss';

const Resume = () => {
  return (
    <div className="content">
      <About />

      <Experience />

      <Skills />

      <Projects />

      <Education />

      <Leadership />

      {/* <Interests /> */}
    </div>
  );
};

export default Resume;
