import Colors from "../Components/Colors";
import CanvasMyPhoto from "../Components/CanvasMyPhoto";

const About = () => {
  return (
    <>
      <Colors />
      <section id="about">
        <div className="img-about">
          <CanvasMyPhoto />
        </div>
        <div className="about-content">
          <span>Let me intteoduce myself</span>
          <h2>
            <span>About Me</span>
          </h2>
          <h3>A story of good</h3>
          <p>
            I came to this field in which I find my passion and I am ready to
            put all my energy into working in it.
            <br />
            Im a junier Front-end developer with advanced web development
            training, with a focus on creating responsive applications.
            <br />
            Skilled in crafting user-friendly interfaces and passionate about
            delivering seamless user experiences. <br />I have a passion for
            learning new technologies and gaining new experiences, as well as
            regularity and a desire for self-development. <br />
            Quick adaptation to different work environments.
          </p>
          <a className="btn" href="#">
            Read More!
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
