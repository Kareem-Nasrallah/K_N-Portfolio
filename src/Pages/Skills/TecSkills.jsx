import React, { useEffect, useRef } from "react";

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
      imgId: "next",
      name: "Next",
    },
    {
      imgId: "bxl-typescript",
      name: "typescript",
    },
    {
      imgId: "bxl-css3",
      name: "CSS 3",
    },
    {
      imgId: "bxl-html5",
      name: "HTML 5",
    },
    {
      imgId: "bxl-react",
      name: "React",
    },
    {
      imgId: "bxl-javascript",
      name: "javascript",
    },
    {
      imgId: "bxl-sass",
      name: "scss",
    },
    {
      imgId: "bxl-git",
      name: "git",
    },
    {
      imgId: "bxl-redux",
      name: "redux",
    },
    {
      imgId: "bxl-bootstrap",
      name: "Bootstrap",
    },
    {
      imgId: "bxl-tailwind-css",
      name: "tailwind",
    },
    {
      imgId: "bxl-github",
      name: "gitHub",
    },
  ];

  const TecSkillsFunc = skillsInfo.map((skillInfo, index) => {
    return (
      <div className="skill-box" key={index}>
        <i className={`bx ${skillInfo.imgId} after`}>
          {skillInfo.name === "Next" && <p>N</p>}
        </i>
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
