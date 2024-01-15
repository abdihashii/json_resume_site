import React, { useContext } from 'react';

// External components
import { Element } from 'react-scroll';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

const Interests = () => {
  const { interests } = useContext(ResumeContext);

  return (
    <Element className="resume-section" name="interests" id="interests">
      <div className="resume-content">
        <h2 className="mb-5">Interests</h2>

        {interests.map((interest, key) => {
          return <p {...{ key }}>{interest}</p>;
        })}
      </div>
    </Element>
  );
};

export default Interests;
