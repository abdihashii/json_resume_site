import React, { useContext } from 'react';

// Components
import ExperienceRow from './ExperienceRow';
import ProjectRow from './ProjectRow';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './experience.scss';

const Experience = () => {
  const { experiences, projects } = useContext(ResumeContext);

  return (
    <div className="experience">
      <p className="experience-title">Experience</p>
      {experiences.map((experience, key) => {
        return <ExperienceRow {...{ key }} {...{ experience }} />;
      })}

      <p className="experience-title">Projects</p>
      {projects.map((project, key) => {
        return <ProjectRow {...{ key }} {...{ project }} />;
      })}
    </div>
  );
};

export default Experience;
