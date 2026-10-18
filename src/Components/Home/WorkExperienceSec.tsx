import { useNavigate } from "react-router-dom";

const WorkExperienceSec = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="sectionTitle">
        <span>Work Experience</span>
      </h2>
      <div className="flex justify-evenly items-stretch flex-col gap-10 md:flex-row mt-12!">
        {/* MB Alfa */}
        <div className="rounded-4xl border-4 border-(--points-color) transition-all duration-500 group hover:border-(--hover-color) overflow-hidden w-full sm:mx-auto sm:w-[450px] md:w-[520px] bg-(--hover-color)/5 hover:bg-white/5 shadow-lg hover:shadow-xl">
          <div className="bg-[#4C4098] h-40 flex justify-center items-center p-10">
            <div className="bg-[url('/company-logos/mbalfa-header.png')] bg-contain bg-center bg-no-repeat h-full w-full sm:mx-auto sm:w-[450px] md:w-[520px]"></div>
          </div>
          <div className=" p-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-0! transition-all duration-500 group-hover:text-(--hover-title)!">
                MB ALFA
              </h3>
              <p className="font-bold">(April 2025 – November 2025)</p>
            </div>
            <p>
              My first opportunity as a Front-End Developer, starting with a
              3-month internship and continuing as a full-time developer.
              Working primarily with React on a restaurant management ERP, I
              gained practical experience building and maintaining features
              while learning to take ownership of challenging tasks and solve
              problems independently.
            </p>
          </div>
        </div>

        {/* Media Creation */}
        <div className="rounded-4xl border-4 border-(--points-color) transition-all duration-500 group hover:border-(--hover-color) overflow-hidden w-full sm:mx-auto sm:w-[450px] md:w-[520px] bg-(--hover-color)/5 hover:bg-white/5 shadow-lg hover:shadow-xl flex flex-col">
          <div className="bg-[#000] h-40 flex justify-center items-center p-10">
            <div className="bg-[url('/company-logos/Media-Creation-Logo.svg')] bg-contain bg-center bg-no-repeat h-full w-full sm:mx-auto sm:w-[450px] md:w-[520px]"></div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-0! transition-all duration-500 group-hover:text-(--hover-title)!">
                Media Creation
              </h3>
              <p className="font-bold">(March 2026 – Present)</p>
            </div>
            <p>
              My current Front-End experience, working with WordPress and
              Elementor at Media Creation. Working across multiple websites and
              projects has challenged me to adapt to a new technology, explore
              different UI and responsive design approaches, and grow beyond the
              React-based development I started with.
            </p>
          </div>
        </div>
      </div>
      <button
        className="block bg-(--hover-color) px-4 py-2 mt-12 mx-auto text-white! text-base font-bold rounded-xl cursor-pointer hover:bg-(--hover-color)/80 transition-all duration-300 self-end"
        onClick={() => navigate(`/work-experience`)}
      >
        Explore My Experience
      </button>
    </section>
  );
};

export default WorkExperienceSec;
