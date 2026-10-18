import { useNavigate } from "react-router-dom";
import Point from "@/Components/Point";

const MyJourney = () => {
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
    <section className="bg-(--secon-bg-color)">
      <h2 className="sectionTitle">
        <span>my Journey</span>
      </h2>
      <div className="pt-10 ps-10 sm:ps:0">
        <div className="relative">
          <div className="absolute left-0 sm:left-[50%] top-0 sm:translate-x-[-50%] mt-4 w-1 h-[calc(90%-30px)] sm:h-[calc(100%-86px)] md:h-[calc(100%-58px)] z-50 bg-(--hover-color)/20"></div>

          {lifePoints.map((point, i) => (
            <div
              className={`relative h-22 md:h-18 lg:h-16 
            ${point.id === "?ch=1#journey" && "h-22! lg:pt-3"}
            `}
              key={point.title}
            >
              <div
                className={`flex items-start md:items-center absolute cursor-pointer group -ms-[5px] sm:ms-0
          ${
            i % 2 === 0
              ? "flex-row-reverse sm:flex-row left-0 translate-x-[3.5px] sm:right-[50%] sm:left-auto sm:translate-x-[3.5px]"
              : "flex-row-reverse left-0 translate-x-[3.5px] sm:left-[50%] sm:translate-x-[-3.5px]"
          }
            ${point.id === "?ch=1#journey" && " items-start! "}`}
              >
                <div
                  className={`flex justify-center gap-0 md:gap-3 relative after:absolute mx-4 after:-bottom-1 after:h-[3px] after:w-0 after:bg-(--hover-color) after:content-[''] after:transition-all after:duration-400 group-hover:after:w-full
            ${
              i % 2 === 0
                ? "items-start sm:items-end flex-col-reverse md:flex-row md:items-center after:right-0"
                : "items-start flex-col-reverse md:flex-row-reverse md:items-center after:left-0"
            }
            ${
              point.id === "?ch=1#journey" &&
              " flex-col-reverse! items-start! gap-0!"
            }`}
                >
                  <b className="text-sm hover:text-(--text-color)/85!">
                    ({point.date})
                  </b>

                  <h3 className="hover:text-(--text-color)/85!">
                    {point.title}
                  </h3>
                </div>

                <Point pointId={point.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
