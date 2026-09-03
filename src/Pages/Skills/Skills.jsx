import { useEffect, useRef, useState } from "react";
import "./skills.css";
import Hero from "../../Components/Hero";
import {
  SiNextdotjs,
  SiFormik,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiShadcnui,
  SiGit,
  SiHtml5,
  SiGithub,
  SiGitlab,
  SiReact,
  SiCss3,
  SiSass,
  SiRedux,
  SiElementor,
} from "react-icons/si";
import { BsShieldShaded, BsWordpress } from "react-icons/bs";

const Skills = () => {
  const [spiner, setSpinner] = useState("all");

  const profSkillsRef = useRef(null);

  useEffect(() => {
    const hide = () => {
      profSkillsRef.current?.classList.add("show-items");
    };
    setTimeout(hide, 0);
    return () => {
      profSkillsRef.current?.classList.remove("show-items");
    };
  }, []);

  const coreDevelopment = [
    {
      icon: <SiHtml5 className="iconComponent html" />,
      name: "HTML 5",
      position: "top-[15%]  left-0",
      parintClass: "html",
    },
    {
      icon: <SiJavascript className="iconComponent javascript" />,
      name: "Javascript",
      position: "top-[16%] right-0 ",
      parintClass: "javascript",
    },
    {
      icon: <SiTypescript className="iconComponent typescript" />,
      name: "Typescript",
      position: "top-[3.5%] right-[11%]",
      parintClass: "typescript",
    },
    {
      icon: <SiReact className="iconComponent react" />,
      name: "React",
      position: "-top-[4.5%]  right-[26%]",
      parintClass: "react",
    },
    {
      icon: <SiElementor className="iconComponent elementor" />,
      name: "Elementor",
      position: "-top-[3.5%]  left-40",
      parintClass: "elementor",
    },
    {
      icon: <BsWordpress className="iconComponent wordpress" />,
      name: "Wordpress",
      position: "top-[4.5%] left-[10%]",
      parintClass: "wordpress",
    },
    {
      icon: <SiNextdotjs className="iconComponent next" />,
      name: "Next",
      position: "-top-[7%]  left-[40%]",
      parintClass: "next",
    },
  ];

  const uiStyling = [
    {
      icon: <SiCss3 className="iconComponent css" />,
      name: "CSS 3",
      position: "top-[29.5%] -left-[6.5%]",
      parintClass: "css",
    },
    {
      icon: <SiSass className="iconComponent scss" />,
      name: "SCSS",
      position: "top-[46.5%] -left-[7%]",
      parintClass: "scss",
    },
    {
      icon: <SiBootstrap className="iconComponent bootstrap" />,
      name: "Bootstrap",
      position: "bottom-[22%] -left-[3.5%]",
      parintClass: "bootstrap",
    },
    {
      icon: <SiTailwindcss className="iconComponent tailwind" />,
      name: "Tailwindcss",
      position: "bottom-[9%] left-[5%]",
      parintClass: "tailwind",
    },
    {
      icon: <SiShadcnui className="iconComponent shadcn" />,
      name: "Shadcn/ui",
      position: "-bottom-[2%] left-[19.5%]",
      parintClass: "shadcn",
    },
  ];

  const applicationTools = [
    {
      icon: <SiRedux className="iconComponent redux-toolkit" />,
      name: "Redux Toolkit",
      position: "top-[35%] -right-[6.5%]",
      parintClass: "redux-toolkit",
    },
    {
      icon: <BsShieldShaded className="iconComponent next-auth" />,
      name: "Next Auth",
      position: "bottom-[30%] -right-10",
      parintClass: "next-auth",
    },
    {
      icon: <SiFormik className="iconComponent formik" />,
      name: "Formik",
      position: "bottom-[12.5%] right-[2.5%]",
      parintClass: "formik",
    },
    {
      icon: <SiGit className="iconComponent git" />,
      name: "Git",
      position: "bottom-[0.5%] right-[15%]",
      parintClass: "git",
    },
    {
      icon: <SiGithub className="iconComponent github" />,
      name: "GitHub",
      position: "-bottom-[5.5%] right-[29%]",
      parintClass: "github",
    },
    {
      icon: <SiGitlab className="iconComponent gitlap" />,
      name: "GitLab",
      position: "-bottom-[7.2%] left-[38%]",
      parintClass: "gitlab",
    },
  ];

  return (
    <>
      <Hero title={"Technical Skills"} bgImage={"./headers/skills.png"} />
      <section id="skills" className="!pb-0 !h-auto">
        <div className="main-text">
          <span> technical and profeessional </span>
          <h2>
            <span>My Skills</span>
          </h2>
        </div>
        {/* <div className="all-skills">
          <div className="skill-left">
            <h3>technical Skills</h3>
            <TecSkills />
          </div>
        </div> */}
        <div className="flex justify-center items-center gap-4">
          <button
            className="cursor-pointer p-2 font-semibold text-[0.85rem] tracking-[0.4px] hover:color-[var(--hover-color)]"
            onClick={() => setSpinner("all")}
          >
            All
          </button>
          <button
            className="cursor-pointer p-2 font-semibold text-[0.85rem] tracking-[0.4px] hover:color-[var(--hover-color)]"
            onClick={() => setSpinner("core development")}
          >
            Core Development
          </button>
          <button
            className="cursor-pointer p-2 font-semibold text-[0.85rem] tracking-[0.4px] hover:color-[var(--hover-color)]"
            onClick={() => setSpinner("ui & styling")}
          >
            UI & Styling
          </button>
          <button
            className="cursor-pointer p-2 font-semibold text-[0.85rem] tracking-[0.4px] hover:color-[var(--hover-color)]"
            onClick={() => setSpinner("application tools")}
          >
            Application Tools
          </button>
        </div>
        <div className="h-[800px] w-[60vw] overflow-hidden z-10 relative  flex justify-center items-center">
          <div className="movingParent w-[780px] h-[780px] border-2 border-[#00000030] rounded-full m-auto  flex justify-center items-center">
            <div
              className={`iconsGroup flex justify-center items-center rounded-full  h-[700px] w-[700px] ${spiner === "all" && "iconsGroupAnimation"}`}
              style={{
                rotate:
                  spiner === "core development"
                    ? "0deg"
                    : spiner === "ui & styling"
                      ? "120deg"
                      : spiner === "application tools" && "225deg",
              }}
            >
              <div className="h-[600PX] w-[600PX] border-2 border-[#00000030] rounded-full"></div>
              {coreDevelopment.map((skillInfo) => (
                <div
                  className={`skill-box absolute ${skillInfo.position} ${spiner === "all" && "spin"} `}
                  style={{
                    rotate:
                      spiner === "core development"
                        ? "0deg"
                        : spiner === "ui & styling"
                          ? "-120deg"
                          : spiner === "application tools" && "-225deg",
                  }}
                  key={skillInfo.name}
                >
                  <span className={`after after-${skillInfo.parintClass}`}>
                    {skillInfo.icon}
                  </span>
                </div>
              ))}

              {uiStyling.map((skillInfo) => (
                <div
                  className={`skill-box absolute ${skillInfo.position} ${spiner === "all" && "spin"} `}
                  style={{
                    rotate:
                      spiner === "core development"
                        ? "0deg"
                        : spiner === "ui & styling"
                          ? "-120deg"
                          : spiner === "application tools" && "-225deg",
                  }}
                  key={skillInfo.name}
                >
                  <span className={`after after-${skillInfo.parintClass}`}>
                    {skillInfo.icon}
                  </span>
                </div>
              ))}

              {applicationTools.map((skillInfo) => (
                <div
                  className={`skill-box absolute ${skillInfo.position} ${spiner === "all" && "spin"} `}
                  style={{
                    rotate:
                      spiner === "core development"
                        ? "0deg"
                        : spiner === "ui & styling"
                          ? "-120deg"
                          : spiner === "application tools" && "-225deg",
                  }}
                  key={skillInfo.name}
                >
                  <span className={`after after-${skillInfo.parintClass}`}>
                    {skillInfo.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
