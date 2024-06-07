import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="#landing">Landing</Link>
      <Link to="#about">About</Link>
      <Link to="#experience">Experience</Link>
      <Link to="#contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
