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
      <div className="mt-12! relative">
        <div className="absolute left-0 sm:left-[50%] top-0 sm:translate-x-[-50%] mt-4 w-1 h-[calc(100%-78px)] md:h-[calc(100%-48px)] z-50 bg-(--hover-color)/20"></div>

        {lifePoints.map((point, i) => (
          <div className="relative h-20 md:h-14" key={point.title}>
            <div
              className={`flex items-start md:items-center absolute cursor-pointer group
          ${
            i % 2 === 0
              ? "flex-row left-0 translate-x-[3.5px] sm:right-[50%] sm:left-auto sm:translate-x-[3.5px]"
              : "flex-row-reverse left-0 translate-x-[3.5px] sm:left-[50%] sm:translate-x-[-3.5px]"
          }`}
            >
              <div
                className={`flex gap-0 md:gap-3 relative after:absolute mx-4
            after:right-0 after:-bottom-1 after:h-[3px] after:w-0
            after:bg-(--hover-color) after:content-['']
            after:transition-all after:duration-400 group-hover:after:w-full
            ${
              i % 2 === 0
                ? "items-end flex-col-reverse md:flex-row md:items-center"
                : "items-start flex-col-reverse md:flex-row-reverse md:items-center"
            }`}
              >
                <b className="text-sm hover:text-(--text-color)/85!">
                  ({point.date})
                </b>

                <h3 className="hover:text-(--text-color)/85!">{point.title}</h3>
              </div>

              <Point />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
