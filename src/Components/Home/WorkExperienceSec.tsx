import { useNavigate } from "react-router-dom";

const WorkExperienceSec = () => {
  
    const navigate = useNavigate();
  return (
    <section>
      <h2 className="sectionTitle">
        <span>Work Experience</span>
      </h2>
      <div className="flex justify-between items-center mt-12!">
        <div className="rounded-4xl border-4 border-[#363074] overflow-hidden w-[600px]">
          <div className="bg-[#4C4098] h-60 flex justify-center items-center p-10">
            <div className="bg-[url('/company-logos/mbalfa-header.png')] bg-contain bg-no-repeat h-32 w-[600px]"></div>
          </div>
          <div className=" p-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-0!">MB ALFA</h3>
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
            <button className="block bg-(--hover-color) px-4 py-2 ms-auto mt-4 text-white! text-base font-bold rounded-xl cursor-pointer hover:bg-(--hover-color)/80 transition-all duration-300"
            onClick={() => navigate(`/work-experience#workEx`)}>
              Explore My Experience
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default WorkExperienceSec;
