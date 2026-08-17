import Mbalfa from "../../Components/work experience/Mbalfa";
import IcomGroup from "../../Components/work experience/IcomGroup";
import { useEffect, useRef, useState } from "react";
import "./workEx.css";
import Hero from "../../Components/Hero";

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
      <Hero title={"Work Experience"} bgImage={'./headers/workEx2.png'}/>
      <section id="workEx">
        <div className="experience">
          <div className="job-experience">
            {/* MB ALFA */}
            <div ref={mbalfa} className="fromlift">
              <Mbalfa idClicked={idClicked} setIdClicked={setIdClicked} />
            </div>
            <div ref={icom} className="fromright">
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
