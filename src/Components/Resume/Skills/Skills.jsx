import React, { useContext } from 'react';

// Components
import SkillRow from './SkillRow';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './skills.scss';

const Skills = () => {
  const { email, phone, website, area, skills } = useContext(ResumeContext);

  return (
    <div className="skills-panel">
      <div className="skills-basics">
        <p>{email}</p>
        <p>{phone}</p>
        <p>
          <a href={`${website}`} rel="noreferrer" target="_blank">
            abdirahmanhaji.com
          </a>
        </p>
        <p>{area}</p>
      </div>
      {skills.map((skill, key) => {
        return <SkillRow {...{ key }} {...{ skill }} />;
      })}
    </div>
  );
};

export default Skills;
