import "./Home.scss";
import image from "../../image.jpeg";

const Home = () => {
  return (
    <div className="landing" id="landing">
      <h2>Welcome to my portfolio! - Evan Mitchell</h2>
      <div className="content">
        <img src={image} alt="#" />
        <p>
          I am a Software Engineer with several years of experience working as
          anything from Full Stack Developer to Embedded System Developer.
          Please feel free to explore the sections outlined below if you wish to
          learn more about me
        </p>
      </div>
    </div>
  );
};

export default Home;
