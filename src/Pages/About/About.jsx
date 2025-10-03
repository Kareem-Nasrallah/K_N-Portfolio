import { useEffect, useRef } from "react";
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
      <div ref={aboutContRef} className="about-content fromright">
        <span>Let me intteoduce myself</span>
        <h2>
          <span>About Me</span>
        </h2>
        <h3>A Story of Growth</h3>
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
      <div ref={aboutImgRef} className="fromlift experience min-h-96 my-10">
        <h2>
          <span>Work Experience</span>
        </h2>

        <div className="job mb-4">
          <h3 className="text-xl font-semibold">
            Frontend Developer | MB ALFA Company
          </h3>
          <p className="mb-2">(April 2025 – Present)</p>

          <ul className="list-disc list-inside space-y-2 flex flex-col gap-4">
            <li>
              3-month internship where I worked for the first time on
              large-scale, real-world projects. Collaborated with the testing
              team and strengthened my knowledge of Redux Toolkit through
              continuous practice until I mastered it.
            </li>
            <li>
              Full-time developer until now, collaborating closely with both
              the testing and backend teams. Learned and applied new skills I
              hadn’t worked with before, such as Formik and Yup.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
