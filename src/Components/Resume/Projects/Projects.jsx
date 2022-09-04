import React from 'react';

// External components
import { Element } from 'react-scroll';

// CSS
import './projects.scss';

const Projects = () => {
  return (
    <Element className="resume-section" name="projects" id="projects">
      <div className="resume-content">
        <h2 className="mb-5">Projects</h2>

        {/* <div className="projects-list"></div> */}

        <ul className="">
          <a className="" href="#" target="_blank">
            <li className="">Restaurant Search Database</li>
          </a>
          <a className="" href="#" target="_blank">
            <li className="">IoT home controller</li>
          </a>
          <a className="" href="#" target="_blank">
            <li className="">Weather App</li>
          </a>
        </ul>
      </div>
    </Element>
  );
};

export default Projects;
