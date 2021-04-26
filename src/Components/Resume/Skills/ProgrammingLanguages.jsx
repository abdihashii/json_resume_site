import React from 'react';

// External components
import ReactTooltip from 'react-tooltip';

const ProgrammingLanguages = () => {
  return (
    <>
      <div className="subheading mb-3">Programming Languages</div>
      <ul className="list-inline list-icons">
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="JavaScript"
            plac
            class="devicon-javascript-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="TypeScript"
            plac
            class="devicon-typescript-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="HTML5"
            class="devicon-html5-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="CSS3"
            class="devicon-css3-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="MySQL"
            class="devicon-mysql-plain-wordmark"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Python"
            class="devicon-python-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Java"
            class="devicon-java-plain"
          ></i>
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

export default ProgrammingLanguages;
