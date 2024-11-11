import { useEffect, useRef } from "react";
import ProfSkill from "../../Components/ProfSkill";
import TecSkills from "./TecSkills";

const Skills = () => {

  const allSkillsRef = useRef(null);

  useEffect(()=>{
    allSkillsRef.current?.classList.add("show-items")
    return ()=>{
      allSkillsRef.current?.classList.remove("show-items")
    }
  },[])
  
  return (
    <section id="skills">
      <div className="main-text">
        <span> tecknical and profeessional </span>
        <h2>
          <span>My Skills</span>
        </h2>
      </div>
      <div className="all-skills">
        <div ref={allSkillsRef} className="skill-left scrollScale">
          <h3>Tecknical Skills</h3>
          <TecSkills />
        </div>
        <div className="skill-right">
          <h3>Profeessional Skills</h3>
          <div className="professional">
            <ProfSkill percentage="90" name="Team Work" />
            <ProfSkill percentage="85" name="Communication" />
            <ProfSkill percentage="75" name="Creativity" />
            <ProfSkill percentage="80" name="Problem Solving" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
