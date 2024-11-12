import { useEffect, useRef } from "react";
import CanvasMyPhoto from "../../Components/CanvasMyPhoto";
import "./about.css"

const About = () => {
  const aboutImgRef = useRef(null);
  const aboutContRef = useRef(null);
  useEffect(() => {
    aboutImgRef.current?.classList.add("show-items");
    aboutContRef.current?.classList.add("show-items");
    return () => {
      aboutImgRef.current?.classList.remove("show-items");
      aboutContRef.current?.classList.remove("show-items");
    };
  }, []);

  return (
    <section id="about">
      <div ref={aboutImgRef} className="img-about fromlift">
        <CanvasMyPhoto />
      </div>
      <div ref={aboutContRef} className="about-content fromright">
        <span>Let me intteoduce myself</span>
        <h2>
          <span>About Me</span>
        </h2>
        <h3>A story of good</h3>
        <p>
          I came to this field in which I find my passion and I am ready to put
          all my energy into working in it.
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
  );
};

export default About;
