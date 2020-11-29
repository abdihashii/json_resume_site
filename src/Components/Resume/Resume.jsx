import React from 'react';

// Components
import Title from './Title/Title';
import Avatar from './Avatar/Avatar';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';

// CSS
import './resume.scss';

const Resume = () => {
  return (
    <div className="resume-grid">
      <Title />
      <Avatar />
      <Experience />
      <Skills />
    </div>
  );
};

export default Resume;
