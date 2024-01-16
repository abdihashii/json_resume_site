import React from 'react';

// External components
import { Element } from 'react-scroll';

// Internal components
import ProgrammingLanguages from './ProgrammingLanguages';
import ToolsAndFrameworks from './ToolsAndFrameworks';
import Workflow from './Workflow';

// CSS
import './skills.scss';

const Skills = () => {
  return (
    <Element className="resume-section" name="skills">
      <div className="resume-content">
        <h2 className="mb-5">Skills</h2>

        <ProgrammingLanguages />

        <ToolsAndFrameworks />

        <Workflow />
      </div>
    </Element>
  );
};

export default Skills;
