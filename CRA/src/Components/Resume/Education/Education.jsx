import React, { useContext } from 'react';

// External components
import { Element } from 'react-scroll';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// Styles
import './education.scss';

const Education = () => {
  const {
    education: { institution, location, major, degree, endDate, courses },
  } = useContext(ResumeContext);

  return (
    <Element className="resume-section" name="education" id="education">
      <div className="resume-content">
        <h2 className="mb-5">Education</h2>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="education-content mr-auto">
            <h3 className="mb-0">{institution}</h3>
            <div className="subheading mb-3">{location}</div>
            <div class="subheading mb-0">{degree}</div>
            <div>{major}</div>
          </div>

          <div className="education-date text-md-right">
            <span className="text-primary">Graduated: {endDate}</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="education-content mr-auto">
            <h3 className="mb-0">Courses</h3>
            <ul>
              {courses.map((course, key) => {
                return <li {...{ key }}>{course}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;
