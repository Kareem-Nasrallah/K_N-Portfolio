import { useEffect, useRef } from "react";
import "./about.css";

const About = () => {
  const aboutContRef = useRef(null);
  useEffect(() => {
    aboutContRef.current?.classList.add("show-items");
    return () => {
      aboutContRef.current?.classList.remove("show-items");
    };
  }, []);

  return (
    <section id="about">
      <div ref={aboutContRef} className="about-content fromright">
        <span>Let me intteoduce myself</span>
        <h2>
          <span>About Me</span>
        </h2>
        <h3>My Growth Story</h3>
        <p>
          I graduated from the Faculty of Arts, History Department (Egyptology),
          but my search for a better future led me to discover programming. What
          started as a career shift quickly became a passion—I found myself
          enjoying both the learning process and building projects.
        </p>
        <p>
          After dedicating nearly two years of studying and practicing front-end
          development, I landed my first unpaid internship opportunity. At the
          time, I was working full-time as a sales employee, but I couldn’t let
          the chance pass. Despite the long hours, I committed myself fully to
          proving my skills and applying everything I had learned to real-world
          projects.
        </p>
        <p>
          The internship was originally planned for three months, but within
          just two months my efforts paid off: I was offered a full-time
          position as a Front-End Developer earlier than expected. That
          experience confirmed my commitment to this field and fueled my
          determination to keep growing, learning, and delivering high-quality
          work.
        </p>
      </div>
    </section>
  );
};

export default About;
