import "./Navbar.scss";
import hamburgerSVG from "../../hamburger.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={hamburgerSVG} alt="Hamburger Menu" />
      <a href="#landing">Landing</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
