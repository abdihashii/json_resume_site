import React from 'react';

// External components
import { Link } from 'react-scroll';

// Internal components
import Avatar from './Avatar/Avatar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        className="navbar-avatar"
        duration="1000"
        smooth="easeInOutQuint"
        to="about"
        spy={true}
      >
        <Avatar imgPath="IMG_2432_ZFrcBTWZ2j.jpeg" />
      </Link>
      <ul className="navbar-nav">
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="about"
          spy={true}
        >
          <li>About</li>
        </Link>
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="experience"
          spy={true}
        >
          <li>Experience</li>
        </Link>
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="skills"
          spy={true}
        >
          <li>Skills</li>
        </Link>
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="projects"
          spy={true}
        >
          <li>Projects</li>
        </Link>
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="education"
          spy={true}
        >
          <li>Education</li>
        </Link>
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="leadership"
          spy={true}
        >
          <li>Leadership</li>
        </Link>
        <Link
          className="navbar-link"
          duration="1000"
          smooth="easeInOutQuint"
          to="interests"
          spy={true}
        >
          <li>Interests</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
