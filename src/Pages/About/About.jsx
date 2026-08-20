import { useEffect, useRef, useState } from "react";
import "./about.css";
import Hero from "../../Components/Hero";

const About = () => {
  const careerShiftRef = useRef(null);
  const ownershipContRef = useRef(null);
  const growthContRef = useRef(null);
  const [selectedChapter, setSelectedChapter] = useState(1);

  useEffect(() => {
    careerShiftRef.current?.classList.add("show-items");
    ownershipContRef.current?.classList.add("show-items");
    growthContRef.current?.classList.add("show-items");
    return () => {
      careerShiftRef.current?.classList.remove("show-items");
      ownershipContRef.current?.classList.remove("show-items");
      growthContRef.current?.classList.remove("show-items");
    };
  }, []);

  return (
    <>
      <Hero
        subtitle={"About Me"}
        title={"My Growth Story"}
        bgImage={"./headers/about.png"}
      />

      <main id="about">
        <section className="about-content bg-(--secon-bg-color)">
          <div ref={careerShiftRef} className="fromright">
            <span>MY JOURNEY</span>

            <h2>It wasn't a straight path.</h2>

            <p>
              If you're looking for someone who had an easy start in the field
              or simply landed their first opportunity through a recommendation,
              that's not my story.
            </p>

            <p>
              I came into software development from a completely different
              academic background. I spent nearly two years learning and
              practicing before getting my first opportunity, and every step
              since then has been built through learning, persistence, and
              taking on challenges beyond what I already knew.
            </p>

            <h3 className="text-xl font-bold">Here's how I got here.</h3>

            <div className="border-2 border-gray-500/50 rounded-4xl my-4 2xl:!h-[460px] xl:!h-[520px] lg:!h-[600px] md:!h-[800px] sm:!h-[870px] h-[1400px] overflow-hidden relative">
              {/* ==================== chapter 01 ==================== */}
              <div
                className={
                  "h-full flex relative overflow-hidden pe-[140px] transition-all duration-500 bg-yellow-300 " +
                  (!(selectedChapter === 1) && "cursor-pointer")
                }
                onClick={() => setSelectedChapter(1)}
              >
                <div className="md:w-8 w-4 md:ps-6 ps-2 pe-10 py-6 bg-[url('./about/myStory1.png')] bg-no-repeat bg-[30%] bg-cover before:absolute before:inset-0 before:bg-yellow-300/80">
                  <h4 className="[writing-mode:vertical-rl] ps-2 font-bold z-10 relative">
                    01 — The Beginning
                  </h4>
                </div>
                <div className="z-10 pe-2 ps-6 py-6">
                  <h3>From Egyptology to Front-End Development</h3>

                  <p className="text-lg">
                    I graduated from the Faculty of Arts, History Department
                    (Egyptology), but I was determined to build a different
                    future for myself. While searching for a career where I
                    could continue growing, I discovered programming and
                    gradually developed a strong interest in web development.
                  </p>

                  <p>
                    I spent nearly two years studying and practicing front-end
                    development before getting my first internship opportunity.
                    At the time, I was working full-time as a sales employee,
                    and the internship was unpaid. Despite the long hours and
                    lack of financial compensation, I decided to take the
                    opportunity and prove that the skills I had built through
                    self-learning could be applied to real-world work.
                  </p>

                  <p>
                    The internship was originally planned to last three months,
                    but after only two months, I was offered a full-time
                    Front-End Developer position. This became my first
                    opportunity to turn years of learning and personal projects
                    into a professional career and gave me the confidence to
                    continue pursuing the path I had chosen.
                  </p>

                  <p>
                    When I received my first salary as a full-time developer, I
                    used it to pay for a year of the two-year Computer Science
                    Diploma at Cairo University. Investing my first professional
                    income in continuing my education was an important step for
                    me and reflected how seriously I had committed to my new
                    career.
                  </p>
                </div>
              </div>
              {/* ==================== chapter 02 ==================== */}
              <div
                className={
                  `bg-[#01e1ff] h-full w-full flex z-20 pe-[144px] transition-all duration-500 overflow-hidden absolute inset-0 ${!(selectedChapter === 2) ? "cursor-pointer " : ""}` +
                  (selectedChapter === 1
                    ? "left-[100%] -translate-x-[128px] cursor-pointer"
                    : "md:left-[64px] sm:left-[50px] left-[46px] translate-x-0")
                }
                onClick={() => setSelectedChapter(2)}
              >
                <div className="md:w-8 w-4 md:ps-6 ps-2 pe-10 py-6 bg-[url('./about/myStory2.png')] bg-no-repeat bg-left bg-cover before:absolute before:inset-0 before:bg-[#01e1ff]/80">
                  <h4 className="[writing-mode:vertical-rl] ps-2 font-bold z-10 relative">
                    02 — Taking Ownership
                  </h4>
                </div>
                <div className="ps-6 pe-3 py-6 z-10">
                  <h3>Learning to Solve Problems Independently</h3>

                  <p>
                    My first full-time experience was at a small company where
                    the Front-End team consisted of only the owner and me.
                    Working in such a small team gave me significant ownership
                    over the development process and exposed me to
                    responsibilities that were often challenging or completely
                    new to me.
                  </p>

                  <p>
                    Instead of relying on someone to guide me through every
                    unfamiliar task, I learned to research how things worked,
                    understand the problem, and find a reliable way to implement
                    the solution myself. This became an important part of how I
                    approached development and made me more comfortable taking
                    responsibility for unfamiliar requirements.
                  </p>

                  <p>
                    I also worked closely with the Backend and testing teams
                    during development. I used Swagger to understand available
                    APIs and their responses, communicated with Backend
                    developers to clarify the expected data structure and
                    Front-End requirements, and integrated those APIs into the
                    application. I also worked with the testing team to
                    investigate and resolve issues when features did not behave
                    as expected.
                  </p>

                  <p>
                    One of the larger challenges I worked on was a new version
                    of the platform that had initially been generated using AI.
                    The application contained many bugs and inconsistencies, so
                    I worked on refining its components, improving its
                    structure, fixing issues, and making the Front-End more
                    consistent internally and more reliable in its communication
                    with the Backend. Beyond development, I also participated in
                    meetings with potential clients to demonstrate the platform
                    and explain its features. I created the required functional
                    documentation and expanded it with technical details to make
                    it useful as a reference for future developers.
                  </p>
                </div>
              </div>
              {/* ==================== chapter 03 ==================== */}
              <div
                className={
                  "bg-rose-400 h-full w-full flex z-40 pe-[144px] transition-all duration-500 overflow-hidden absolute inset-0 " +
                  (selectedChapter === 3
                    ? "md:left-[128px] sm:left-[100px] left-[92px] translate-x-0"
                    : "left-[100%] -translate-x-[64px] cursor-pointer")
                }
                onClick={() => setSelectedChapter(3)}
              >
                <div className="md:w-8 w-4 md:ps-6 ps-2 pe-10 py-6 bg-[url('./about/myStory3.png')] bg-no-repeat bg-left bg-cover before:absolute before:inset-0 before:bg-rose-400/70">
                  <h4 className="[writing-mode:vertical-rl] ps-2 font-bold z-10 relative">
                    03 — Continuous Growth
                  </h4>
                </div>
                <div className="ps-8 pe-2 py-6 z-10">
                  <h3>Growing Beyond a Single Technology</h3>

                  <p>
                    My current experience introduced me to a completely
                    different working environment. The company primarily works
                    with WordPress, a technology I had never worked with before
                    joining. Instead of seeing that as a limitation, I focused
                    on the Front-End foundation I already had and was confident
                    that I could learn the new platform.
                  </p>

                  <p>
                    During the hiring process, I explained that although I had
                    no previous WordPress experience, I had a strong foundation
                    in Front-End development and was confident that learning
                    WordPress would be achievable. After joining the company, I
                    followed through on that commitment and began working with
                    WordPress as part of my day-to-day responsibilities.
                  </p>

                  <p>
                    Working at ICOM has also exposed me to a large number of
                    websites and different types of projects. Working across so
                    many websites has given me much more practical exposure to
                    layouts, visual styles, responsive design, and UI decisions,
                    which has gradually improved my eye for design and helped me
                    become more confident when building and refining interfaces.
                  </p>

                  <p>
                    Alongside my professional work, I successfully completed the
                    first year of the two-year Computer Science Diploma at Cairo
                    University with an overall GPA of 3.7. The first semester
                    was completed while working at my first company, and the
                    second while working at ICOM. I am also continuing to
                    develop my React skills by studying Jonas Schmedtmann's
                    <strong>
                      The Ultimate React Course 2025: React, Next.js, Redux &
                      More
                    </strong>
                    on Udemy, continuing to deepen my knowledge and prepare for
                    the next stage of my career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-content">
          <h2 className="text-center"><span>Education & Learning</span></h2>
          <p className="text-center">
            Learned. Learning. Always evolving. Because the moment I stop
            growing, I stop moving forward.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
