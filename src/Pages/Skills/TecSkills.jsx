import { useEffect, useRef } from "react";
import {
  SiNextdotjs,
  SiFormik,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiPyup,
  SiGit,
  SiHtml5,
  SiGithub,
  SiGitlab,
  SiReact,
  SiCss3,
  SiSass,
  SiRedux,
} from "react-icons/si";

const TecSkills = () => {
  const tecSkillsRef = useRef(null);

  useEffect(() => {
    const hide = () => {
      tecSkillsRef.current?.classList.add("show-items");
    };
    setTimeout(hide, 0);
    return () => {
      tecSkillsRef.current?.classList.remove("show-items");
    };
  }, []);

  const skillsInfo = [
    {
      icon: <SiNextdotjs className="iconComponent next" />,
      name: "Next",
      parintClass: "next",
    },
    {
      icon: <SiReact className="iconComponent react" />,
      name: "React",
      parintClass: "react",
    },
    {
      icon: <SiTypescript className="iconComponent typescript" />,
      name: "Typescript",
      parintClass: "typescript",
    },
    {
      icon: <SiJavascript className="iconComponent javascript" />,
      name: "Javascript",
      parintClass: "javascript",
    },
    {
      icon: <SiRedux className="iconComponent redux-toolkit" />,
      name: "Redux Toolkit",
      parintClass: "redux-toolkit",
    },
    {
      icon: <SiFormik className="iconComponent formik" />,
      name: "Formik",
      parintClass: "formik",
    },
    {
      icon: <SiCss3 className="iconComponent css" />,
      name: "CSS 3",
      parintClass: "css",
    },
    {
      icon: <SiSass className="iconComponent scss" />,
      name: "SCSS",
      parintClass: "scss",
    },
    {
      icon: <SiBootstrap className="iconComponent bootstrap" />,
      name: "Bootstrap",
      parintClass: "bootstrap",
    },
    {
      icon: <SiTailwindcss className="iconComponent tailwind" />,
      name: "Tailwindcss",
      parintClass: "tailwind",
    },
    {
      icon: <SiHtml5 className="iconComponent html" />,
      name: "HTML 5",
      parintClass: "html",
    },
    {
      icon: <SiGit className="iconComponent git" />,
      name: "Git",
      parintClass: "git",
    },
    {
      icon: <SiGithub className="iconComponent github" />,
      name: "GitHub",
      parintClass: "github",
    },
    {
      icon: <SiGitlab className="iconComponent gitlap" />,
      name: "GitLap",
      parintClass: "gitlap",
    },
  ];

  const TecSkillsFunc = skillsInfo.map((skillInfo, index) => {
    return (
      <div className="skill-box" key={index}>
        <span className={`after after-${skillInfo.parintClass}`}>
          {skillInfo.icon}
        </span>
        <p>{skillInfo.name}</p>
      </div>
    );
  });
  return (
    <div ref={tecSkillsRef} id="tec-skills" className="scrollScale">
      {TecSkillsFunc}
    </div>
  );
};

export default TecSkills;
