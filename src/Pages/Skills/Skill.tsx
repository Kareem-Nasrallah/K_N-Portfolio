import { useSelector } from "react-redux"

const Skill = () => {
  const selectedSkill = useSelector((state) => state.skills.selectedSkill);
  return (
    <div className="h-96 w-[500px] mt-20 rounded-t-full">
        <div
          className="!w-96 !h-96"
          key={selectedSkill.id}
        >
          <span className={`after after-${selectedSkill.parintClass}`}>
            {selectedSkill.icon}
          </span>
          <p>{selectedSkill.name}</p>
        </div>
    </div>
  )
}

export default Skill