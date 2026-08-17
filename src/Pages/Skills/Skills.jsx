import { useEffect, useRef } from "react";
import ProfSkill from "../../Components/ProfSkill";
import TecSkills from "./TecSkills";
import "./skills.css";
import Hero from "../../Components/Hero";

const Skills = () => {
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

  return (
    <>
      <Hero title={"Technical Skills"} bgImage={'./headers/skills.png'}/>
      <section id="skills">
        <div className="main-text">
          <span> technical and profeessional </span>
          <h2>
            <span>My Skills</span>
          </h2>
        </div>
        <div className="all-skills">
          <div className="skill-left">
            <h3>technical Skills</h3>
            <TecSkills />
          </div>
          <div className="skill-right">
            <h3>Profeessional Skills</h3>
            <div ref={profSkillsRef} className="professional scrollScale">
              <ProfSkill percentage="80" name="Backend Collaboration" />
              <ProfSkill percentage="85" name="Problem Solving" />
              <ProfSkill percentage="75" name="Creativity" />
              <ProfSkill percentage="90" name="Team Work" />
              <ProfSkill percentage="95" name="Communication" />
              <ProfSkill percentage="90" name="Work Under Pressure" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
