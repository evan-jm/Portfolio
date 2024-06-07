import Navbar from "../components/Navbar/Navbar.js";
import Landing from "../components/Landing/Landing.js";
import About from "../components/About/About.js";
import Experience from "../components/Experience/Experience.js";
import Contact from "../components/Contact/Contact.js";
import Projects from "../components/Projects/Projects.js";
import Education from "../components/Education/Education.js";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
