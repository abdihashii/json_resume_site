// import React from 'react';

// External components
import { Link } from 'react-scroll';

// Internal components
import Avatar from './Avatar';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex flex-col items-center justify-center w-[17rem] h-screen bg-[#594157]">
      <Link
        className="navbar-avatar"
        duration={1000}
        smooth="easeInOutQuint"
        to="about"
        spy={true}
      >
        <Avatar />
      </Link>

      <ul className="flex flex-col w-[85%] list-none text-center">
        <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration={1000}
          smooth="easeInOutQuint"
          to="about"
          spy={true}
        >
          <li>About</li>
        </Link>
        <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration={1000}
          smooth="easeInOutQuint"
          to="experience"
          spy={true}
        >
          <li>Experience</li>
        </Link>
        <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration={1000}
          smooth="easeInOutQuint"
          to="skills"
          spy={true}
        >
          <li>Skills</li>
        </Link>
        <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration={1000}
          smooth="easeInOutQuint"
          to="projects"
          spy={true}
        >
          <li>Projects</li>
        </Link>
        <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration={1000}
          smooth="easeInOutQuint"
          to="education"
          spy={true}
        >
          <li>Education</li>
        </Link>
        <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration={1000}
          smooth="easeInOutQuint"
          to="leadership"
          spy={true}
        >
          <li>Leadership</li>
        </Link>
        {/* <Link
          className="block uppercase font-semibold px-2 py-4 text-[rgba(255,255,255,0.5)] hover:[rgba(255,255,255,0.75)]"
          duration="1000"
          smooth="easeInOutQuint"
          to="interests"
          spy={true}
        >
          <li>Interests</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
