import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/Portfolio">Home</Link>
      <Link to="/Portfolio/about">About</Link>
      <Link to="/Portfolio/projects">Projects</Link>
      <Link to="/Portfolio/experience">Experience</Link>
      <Link to="/Portfolio/education">Education</Link>
      <Link to="/Portfolio/contact">Contact Me</Link>
    </nav>
  );
};

export default Navbar;
