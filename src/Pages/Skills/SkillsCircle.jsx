import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSkill } from "../../redux/skillsSlice";

const SkillsCircle = ({ spiner, justSpine }) => {
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

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const selectedSkill = useSelector((state) => state.skills.selectedSkill);
  console.log(selectedSkill);

  return (
    <>
      <div className="h-[600PX] w-[600PX] border-2 border-[#00000030] rounded-full"></div>
      {skills.coreDevelopment.map((skillInfo) => (
        <div
          className={`skill-box absolute ${skillInfo.position} ${justSpine === true && "spin"} `}
          style={{
            rotate:
              spiner === "core development"
                ? "0deg"
                : spiner === "ui & styling"
                  ? "-120deg"
                  : spiner === "application tools" && "-225deg",
          }}
          key={skillInfo.name}
          onClick={() => {
            dispatch(selectSkill(skillInfo));
            console.log(selectedSkill);
          }}
        >
          <span className={`after after-${skillInfo.parintClass}`}>
            {skillInfo.icon}
          </span>
        </div>
      ))}

      {skills.uiStyling.map((skillInfo) => (
        <div
          className={`skill-box absolute ${skillInfo.position} ${justSpine === true && "spin"} `}
          style={{
            rotate:
              spiner === "core development"
                ? "0deg"
                : spiner === "ui & styling"
                  ? "-120deg"
                  : spiner === "application tools" && "-225deg",
          }}
          key={skillInfo.name}
          onClick={() => {
            dispatch(selectSkill(skillInfo));
            console.log(selectedSkill);
          }}
        >
          <span className={`after after-${skillInfo.parintClass}`}>
            {skillInfo.icon}
          </span>
        </div>
      ))}

      {skills.applicationTools.map((skillInfo) => (
        <div
          className={`skill-box absolute ${skillInfo.position} ${justSpine === true && "spin"} `}
          style={{
            rotate:
              spiner === "core development"
                ? "0deg"
                : spiner === "ui & styling"
                  ? "-120deg"
                  : spiner === "application tools" && "-225deg",
          }}
          key={skillInfo.name}
          onClick={() => {
            dispatch(selectSkill(skillInfo));
            console.log(selectedSkill);
          }}
        >
          <span className={`after after-${skillInfo.parintClass}`}>
            {skillInfo.icon}
          </span>
        </div>
      ))}
    </>
  );
};

export default SkillsCircle;
