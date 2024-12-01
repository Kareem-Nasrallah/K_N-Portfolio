import { useEffect, useRef } from "react";
import CanvasMyPhoto from "../../Components/CanvasMyPhoto";
import "./about.css";

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
        <h3>A Story of Growth</h3>
        <p>
          I came to this field where I found my passion, and I am ready to
          dedicate all my energy to excelling in it. <br />
          I'm a Junior React Developer with advanced web development training,
          specializing in creating dynamic, responsive applications. <br />
          Skilled in crafting interactive, user-friendly interfaces and
          passionate about delivering seamless user experiences. <br />
          I am enthusiastic about learning new technologies, gaining valuable
          experiences, and continually striving for self-improvement. <br />
          Adaptable to diverse work environments and committed to growth.
        </p>
        <a className="btn" href="#">
          Read More!
        </a>
      </div>
    </section>
  );
};

export default About;
