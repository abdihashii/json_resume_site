import React from 'react';
import PropTypes from 'prop-types';

// Factories
import { getDateString } from '../../../Factories/DateFactory';

const ExperienceRow = ({ experience }) => {
  const { position, company, startDate, endDate, area, summary } = experience;

  return (
    <div className="experience-row">
      <h3 className="position-line">{position}</h3>
      <p className="company-line">{company}</p>
      <p className="date-line">
        {startDate} - {endDate}, {getDateString(startDate, endDate)}; {area}
      </p>
      <p className="summary-line">{summary}</p>
    </div>
  );
};

export default ExperienceRow;

ExperienceRow.propTypes = {
  experience: PropTypes.object.isRequired,
};
