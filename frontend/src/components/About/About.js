import "./About.css";

const About = () => {
  const navigateToPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="about" id="about">
      <h2>About Me</h2>
      <div className="buttons">
        <button
          onClick={() => navigateToPage("https://www.github.com/evan-jm")}
        >
          GitHub
        </button>
        <button
          onClick={() =>
            navigateToPage(
              "https://www.linkedin.com/in/evan-mitchell-89817b260/"
            )
          }
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default About;
