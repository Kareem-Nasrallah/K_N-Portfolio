import React from "react";

const TecSkills = () => {
  const skillsInfo = [
    {
      imgId: "bxl-react",
      name: "React",
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
      imgId: "bxl-typescript",
      name: "typescript",
    },
    {
      imgId: "bxl-bootstrap",
      name: "Bootstrap",
    },
    {
      imgId: "bxl-github",
      name: "gitHub",
    },
  ];

  const TecSkillsFunc = skillsInfo.map((skillInfo, index) => {
    return (
      <div className="skill-box" key={index}>
        <i className={`bx ${skillInfo.imgId} after`}></i>
        <p>{skillInfo.name}</p>
      </div>
    );
  });

  return (
    <div id="tec-skills">
      {TecSkillsFunc}
    </div>
  );
};

export default TecSkills;
