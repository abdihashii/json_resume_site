import React from 'react';

// External components
import ReactTooltip from 'react-tooltip';

const Workflow = () => {
  return (
    <>
      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <i class="fa-li fa fa-check"></i>
          Cross Browser Testing &amp; Debugging
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>Cross Functional Teams
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>Agile Development &amp; Scrum
        </li>
        <li>
          <i class="fa-li fa fa-check"></i>Integration and Unit testing &amp;
          Quality Assurance
        </li>
      </ul>

      <ReactTooltip
        id="skills-tooltip"
        getContent={(dataTip) => `${dataTip}`}
        place="bottom"
        effect="solid"
      />
    </>
  );
};

export default Workflow;
