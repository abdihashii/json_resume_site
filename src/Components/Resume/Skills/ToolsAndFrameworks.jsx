import React from 'react';

// External components
import ReactTooltip from 'react-tooltip';

const ToolsAndFrameworks = () => {
  return (
    <>
      <div className="subheading mb-3">Tools &amp; Frameworks</div>
      <ul className="list-inline list-icons">
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Git"
            class="devicon-git-plain-wordmark"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="React"
            class="devicon-react-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Node"
            class="devicon-nodejs-plain-wordmark"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Express"
            class="devicon-express-original-wordmark colored"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="GraphQL"
            class="devicon-graphql-plain-wordmark"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="NPM"
            class="devicon-npm-original-wordmark"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Yarn"
            class="devicon-yarn-plain"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="AWS"
            class="devicon-amazonwebservices-original"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="MongoDB"
            class="devicon-mongodb-plain-wordmark"
          ></i>
        </li>
        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Docker"
            class="devicon-docker-plain"
          ></i>
        </li>

        <li className="list-inline-item">
          <i
            data-for="skills-tooltip"
            data-tip="Sass"
            class="devicon-sass-original"
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

export default ToolsAndFrameworks;
