import Mbalfa from "@/Components/work-experience/Mbalfa";
import IcomGroup from "@/Components/work-experience/IcomGroup";
import { useEffect, useRef, useState } from "react";
import "./workEx.css";
import Hero from "@/Components/Hero";

const WorkExperience = () => {
  const [idClicked, setIdClicked] = useState(null);
  const mbalfa = useRef(null);
  const icom = useRef(null);

  useEffect(() => {
    mbalfa.current?.classList.add("show-items");
    icom.current?.classList.add("show-items");
    return () => {
      mbalfa.current?.classList.remove("show-items");
      icom.current?.classList.remove("show-items");
    };
  }, []);

  return (
    <>
      <Hero
        title={"Work Experience"}
        bgImage={"./headers/workExperience.png"}
      />
      <section id="workEx">
        <div className="experience">
          <h2 className="sectionTitle mt-0! mb-8!">
            <span>Where I've Worked</span>
          </h2>
          <div className="job-experience flex flex-col ">
            {/* MB ALFA */}
            <div ref={mbalfa} className="fromlift relative">
              <Mbalfa idClicked={idClicked} setIdClicked={setIdClicked} />
              <div className="w-[16%] hidden sm:block absolute bottom-20 right-[1%] md:right-[9%] opacity-80">
                <img
                  src="Arrow.png"
                  className="relative rotate-25 md:rotate-12"
                />
                <p className="absolute top-8 right-8 text-xl md:top-10 md:right-8 md:text-2xl lg:top-14 lg:right-12 lg:text-3xl font-bold!">
                  2026
                </p>
              </div>
            </div>
            <div ref={icom} className="fromright scroll-mt-28" id="IcomGroup">
              <IcomGroup idClicked={idClicked} setIdClicked={setIdClicked} />
            </div>

            {/* ICOM Group */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
