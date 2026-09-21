import { useNavigate } from "react-router-dom";
import Point from "../../Components/Point";

const WorkExperiencesSec = () => {
  const navigate = useNavigate();

  const lifePoints = [
    {
      title: "B.A. in Egyptology",
      date: "2019 - 2024",
      id: "#education",
    },
    {
      title: "Starting my programming journey",
      date: "2024 - 2025",
      id: "?ch=1#journey",
    },
    {
      title: "MB ALFA",
      date: "April 2025 – October 2025",
      id: "?ch=2#journey",
    },
    {
      title: "CS Diploma",
      date: "2025 - Presen",
      id: "#education",
    },
    {
      title: "Media Creation",
      date: "march 2026 - Presen",
      id: "?ch=3#journey",
    },
    {
      title: "The Ultimate React Course",
      date: "Presen",
      id: "#education",
    },
  ];

  return (
    <section>
      <h2 className="sectionTitle">
        <span>Life Experience</span>
      </h2>
      <div className="mt-12! relative">
        <div className="absolute right-[50%] top-0 translate-x-[50%] mt-4 w-1 h-[calc(100%-48px)] z-50 bg-(--hover-color)/20"></div>

        {lifePoints.map((point, i) => (
          <div className="relative h-14">
            <div
              className={`flex items-center justify-end absolute cursor-pointer group ${!(i % 2 === 0) ? "flex-row-reverse left-[50%] -translate-x-[3.5px] after:left-0" : "flex-row right-[50%] translate-x-[3.5px] after:left-0"}`}
              onClick={() => navigate(`/about${point.id}`)}
            >
              <div
                className={`flex items-center gap-3 relative after:absolute mx-4 after:right-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-(--hover-color) after:content-[''] after:transition-all after:duration-400 group-hover:after:w-full ${!(i % 2 === 0) ? "after:left-0" : "after:right-0"} ${!(i % 2 === 0) ? "flex-row-reverse" : "flex-row"}`}
              >
                <b className="text-sm">({point.date}) </b>
                <h3>{point.title}</h3>
              </div>
              <Point />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperiencesSec;
