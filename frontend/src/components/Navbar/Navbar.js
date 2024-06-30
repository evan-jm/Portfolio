import "./Navbar.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="nav-container">
      <button onClick={toggleNavVisibility}>Nav</button>
      <nav className={`navbar ${isNavVisible ? "visible" : ""}`}>
        <Link to="/Portfolio">Home</Link>
        <Link to="/Portfolio/about">About</Link>
        <Link to="/Portfolio/projects">Projects</Link>
        <Link to="/Portfolio/experience">Experience</Link>
        <Link to="/Portfolio/education">Education</Link>
        <Link to="/Portfolio/contact">Contact Me</Link>
      </nav>
    </div>
  );
};

export default Navbar;
