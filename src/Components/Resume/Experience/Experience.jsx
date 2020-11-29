import React, { useContext } from 'react';

// Components
import ExperienceRow from './ExperienceRow';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './experience.scss';

const Experience = () => {
  const { experiences } = useContext(ResumeContext);

  return (
    <div className="experience">
      <p className="experience-title">Experience</p>
      {experiences.map((experience, index) => {
        return <ExperienceRow key={index} {...{ experience }} />;
      })}
    </div>
  );
};

export default Experience;
