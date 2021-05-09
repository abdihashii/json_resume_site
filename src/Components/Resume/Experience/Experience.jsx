import React, { useContext } from 'react';

// External components
import { Element } from 'react-scroll';

// Components
import ExperienceRow from './ExperienceRow';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './experience.scss';

const Experience = () => {
  const { experiences } = useContext(ResumeContext);

  return (
    <Element className="resume-section" name="experience">
      <div className="resume-content">
        <h2 className="mb-5">Experience</h2>

        {experiences.map((experience, key) => {
          return <ExperienceRow {...{ key }} {...{ experience }} />;
        })}
      </div>
    </Element>
  );
};

export default Experience;
