import { useEffect, useRef } from "react";
import CanvasMyPhoto from "../../Components/CanvasMyPhoto";
import "./home.css";

const Home = () => {
  const homeImgRef = useRef(null);
  const homeContRef = useRef(null);

  useEffect(() => {
    homeImgRef.current?.classList.add("show-items");
    homeContRef.current?.classList.add("show-items");
    return () => {
      homeImgRef.current?.classList.remove("show-items");
      homeContRef.current?.classList.remove("show-items");
    };
  }, []);

  return (
    <section id="home">
      <div ref={homeContRef} className="home-content fromlift">
        <h3>Hi! Im</h3>
        <h1>Kareem Nasrallah</h1>
        <div className="text-animate">
          <h2>Front-end Developer</h2>
        </div>
        <p>
          I specialize in building dynamic, responsive, and user-friendly
          applications using React and Next.js. With a strong foundation in
          modern JavaScript and TypeScript, along with solid UI development
          skills, I focus on crafting seamless user experiences.
        </p>
        <p>
          Passionate about continuous learning and hands-on projects, I’m always
          exploring the latest web technologies to sharpen my skills.
        </p>
        <a download href="/Kareem Nasrallah.pdf" className="btn">
          Download CV <i className="bx bx-download" />
        </a>
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.facebook.com/kareem.nasrallah.904"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kareem-nasrallah-181772282/"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a target="_blank" href="https://github.com/Kareem-Nasrallah">
            <i className="bx bxl-github" />
          </a>
        </div>
      </div>
      <div ref={homeImgRef} className="home-image fromright">
        <CanvasMyPhoto />
      </div>
    </section>
  );
};

export default Home;
