import { useSelector } from "react-redux";

const Skill = () => {
  const selectedSkill = useSelector((state) => state.skills.selectedSkill);
  return (
    <div className="h-96 w-[550px] mt-32 rounded-t-full z-10 p-8">
      <div className="!w-full !h-full flex gap-12" key={selectedSkill.id}>
        <div className="flex items-center justify-center flex-col ml-4">
          <span
            className={`after after-${selectedSkill.parintClass} big-icon !m-0`}
          >
            {selectedSkill.icon}
          </span>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="!text-[var(--hover-color)] text-2xl font-bold ">
            {selectedSkill.name}
          </p>
          <p className="text-lg">{selectedSkill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
