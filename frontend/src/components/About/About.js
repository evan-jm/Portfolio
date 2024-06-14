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
      <h3>Skills</h3>
      <div className="skills">
        <div className="langauges">
          <h4>Languages</h4>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C++</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="frameworks">
          <h4>Frameworks</h4>
          <ul>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Angular.js</li>
          </ul>
        </div>
        <div className="backends">
          <h4>Backends</h4>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>OracleSQL</li>
          </ul>
        </div>
        <div className="tools">
          <h4>Tools</h4>
        </div>
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
