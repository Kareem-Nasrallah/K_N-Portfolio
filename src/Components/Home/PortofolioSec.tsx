import { useEffect, useRef } from "react";
import PortfolioCard from "../Portfolio/PortfolioCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PortofolioSec = () => {
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  useEffect(() => {
    const show = () => {
      galleryRef.current?.classList.add("show-items");
    };
    setTimeout(show, 0);
    return () => {
      galleryRef.current?.classList.remove("show-items");
    };
  }, []);

    const products = useSelector((state) => state.projects);
  

  return (
    <section id="portfolio">
      <div className="main-text mb-12!">
        <h2>
          <span>Latest Projects</span>
        </h2>
      </div>
      <div className="container max-w-none">
        <div ref={galleryRef} className="portfolio-gallery scrollScale">
          {products.slice(0, 3).map(
              ({
                projectName,
                proDescribing,
                technologies,
                vercelHosting,
                githupLink,
              }) => (
                <PortfolioCard
                  key={projectName}
                  projectName={projectName}
                  proDescribing={proDescribing}
                  technologies={technologies}
                  vercelHosting={vercelHosting}
                  githupLink={githupLink}
                />
              ),
            )}
        </div>
        <button
          className="block bg-(--hover-color) px-4 py-2 mx-auto mt-12 text-white! text-base font-bold rounded-xl cursor-pointer hover:bg-(--hover-color)/80 transition-all duration-300"
          onClick={() => navigate(`/portfolio`)}
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default PortofolioSec;
