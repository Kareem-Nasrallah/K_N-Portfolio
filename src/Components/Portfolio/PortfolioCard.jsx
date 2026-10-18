import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSkill } from "../../redux/skillsSlice";

const PortfolioCard = ({
  technologies,
  category,
  projectName,
  proDescribing,
  githupLink,
  vercelHosting,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { coreDevelopment, uiStyling, applicationTools } = useSelector(
    (state) => state.skills.skills,
  );
  const allSkills = [...coreDevelopment, ...uiStyling, ...applicationTools];

  const projectSkills = (skillsArray) => {
    const technologyObjects = [];
    const technologiesNoObject = [];

    skillsArray.forEach((skillId) => {
      const skill = allSkills.find((item) => item.id === skillId);

      if (skill) {
        technologyObjects.push(skill);
      } else {
        technologiesNoObject.push(skillId);
      }
    });

    return { technologyObjects, technologiesNoObject };
  };

  const { technologyObjects, technologiesNoObject } =
    projectSkills(technologies);

  return (
    <>
      <div className={`port-box portfolio-item ${category}`}>
        <div className="port-image">
          <img src={`/portfolio/${projectName}.jpg`} alt="" />
        </div>
        <div className="port-content flex flex-col justify-between">
          <div>
            <h3>{projectName}</h3>
            <p>{proDescribing}</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-start justify-start mt-6 mb-4">
            {technologyObjects.map((technology) => (
              <p
                key={technology.id}
                onClick={() => {
                  navigate(`/skills#skills`);
                  dispatch(selectSkill(technology.id));
                }}
                className="inline-block px-2 py-1 bg-(--hover-color) border-2 rounded-2xl cursor-pointer text-white! hover:bg-(--hover-color)/70"
              >
                {technology.name}
              </p>
            ))}
            {technologiesNoObject.map((technology) => (
              <p
                key={technology}
                className="inline-block px-2 py-1 bg-(--hover-color) border-2 rounded-2xl text-white!"
              >
                {technology}
              </p>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={
                githupLink
                  ? githupLink
                  : `https://github.com/Kareem-Nasrallah/${projectName}`
              }
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href={vercelHosting} target="_blank">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

PortfolioCard.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  proDescribing: PropTypes.string.isRequired,
  githupLink: PropTypes.string,
  vercelHosting: PropTypes.string,
};

export default PortfolioCard;
