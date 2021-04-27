import React, { useContext } from 'react';

// External components
import { Element } from 'react-scroll';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

const About = () => {
  const { email, aboutSummary, interests } = useContext(ResumeContext);

  return (
    <Element className="resume-section" name="about">
      <div className="resume-content">
        <h1>
          Abdirahman {/*  */}
          <span className="text-primary">Haji</span>
        </h1>
        <div className="subheading mb-5">
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        <h3 className="mb-3">About me</h3>
        <p className="mb-5">{aboutSummary}</p>

        <h3 className="mb-3">Interests</h3>
        {interests.map((interest, key) => {
          return <p {...{ key }}>{interest}</p>;
        })}
      </div>
    </Element>
  );
};

export default About;
