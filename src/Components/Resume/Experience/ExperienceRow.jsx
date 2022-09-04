import React from 'react';
import PropTypes from 'prop-types';

// Factories
// import { getDateString } from '../../../Factories/DateFactory';

const ExperienceRow = ({ experience }) => {
  const {
    position,
    company,
    startDate,
    endDate,
    area,
    stack,
    // summary,
    highlights,
  } = experience;

  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="experience-content">
        <h3 className="mb-0">{position}</h3>

        <div className="subheading mb-0">{company}</div>

        <p>{area}</p>

        <p>
          <strong>Stack: </strong>
          {stack}
        </p>

        <ul>
          {highlights.map((highlight, key) => {
            return <li {...{ key }}>{highlight}</li>;
          })}
        </ul>
      </div>

      <div className="experience-date">
        <span className="text-primary">
          {startDate} - {endDate}
          {/* , {getDateString(startDate, endDate)} */}
        </span>
      </div>
    </div>
  );
};

export default ExperienceRow;

ExperienceRow.propTypes = {
  experience: PropTypes.object.isRequired,
};
