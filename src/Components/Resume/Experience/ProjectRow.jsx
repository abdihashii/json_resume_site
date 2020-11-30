import React from 'react';
import PropTypes from 'prop-types';

const ProjectRow = ({ project }) => {
  const { title, date, summary, repo, link } = project;

  return (
    <div className="">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{summary}</p>
      <p>
        <a href={link} target="_blank" rel="noreferrer">
          {repo}
        </a>
      </p>
      <br />
    </div>
  );
};

export default ProjectRow;

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
};
