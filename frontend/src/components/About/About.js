import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About Me</h2>
      <p>
        Welcome! I'm Evan, a passionate software engineer dedicated to crafting
        innovative solutions that push the boundaries of technology. With a
        robust background in full stack and embedded system development, I
        thrive on tackling complex problems and transforming them into elegant,
        user-centric software experiences. Whether it's developing scalable
        backend systems, architecting intuitive user interfaces, or optimizing
        algorithms for performance, I bring creativity, precision, and a
        relentless drive for excellence to every project I undertake. Let's
        collaborate and build something extraordinary together.
      </p>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>C++</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>MongoDB</li>
          <li>RESTful API</li>
        </ul>
      </div>
      <div className="links">
        <a href="https://github.com/evan-jm" target="blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/evan-mitchell-89817b260/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
