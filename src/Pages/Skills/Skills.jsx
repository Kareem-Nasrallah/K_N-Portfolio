import { useEffect, useRef, useState } from "react";
import "./skills.css";
import Hero from "../../Components/Hero";
import SkillsCircle from "./SkillsCircle";
import Skill from "./Skill";

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
        <div className="h-[540px] w-[60vw] overflow-hidden z-10 relative  flex justify-center items-center">
          <Skill />
          <div
            className="movingParent w-[780px] h-[780px] border-2 border-[#00000030] rounded-full absolute top-0 left-[50%] -translate-x-[50%]  flex justify-center items-center"
          >
            <div
              className={`iconsGroup flex justify-center items-center rounded-full relative  h-[700px] w-[700px] iconsGroupAnimation ${spiner === "all" ? "opacity-100 z-100" : "opacity-0 z-0"}`}
            >
              <SkillsCircle spiner={spiner} setSpinner={setSpinner} justSpine={true}/>
            </div>
            <div
              className={`iconsGroup flex justify-center items-center rounded-full relative  h-[700px] w-[700px] ${spiner === "all" ? "opacity-0 z-0" : "opacity-100 z-100"} -rotate-20`}
              style={{
                rotate:
                  spiner === "core development"
                    ? "0deg"
                    : spiner === "ui & styling"
                      ? "120deg"
                      : spiner === "application tools" && "225deg",
              }}
            >
              <SkillsCircle spiner={spiner} setSpinner={setSpinner} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
