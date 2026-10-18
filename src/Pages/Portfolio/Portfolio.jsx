import { useEffect, useRef } from "react";
import PortfolioCard from "../../Components/Portfolio/PortfolioCard";
import mixitup from "mixitup";
import "./portfolio.css";
import Hero from "../../Components/Hero";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      mixitup(galleryRef.current, {
        selectors: {
          target: ".portfolio-item",
        },
        animation: {
          duration: 700,
        },
      });
    }
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
    <>
      <Hero
        // subtitle={"About Me"}
        title={"My Portfolio"}
        bgImage={"./headers/portfolio.png"}
      />
      <section id="portfolio">
        <div className="main-text">
          <span>What can i do for you</span>
          <h2>
            <span>Latest Projects</span>
          </h2>
        </div>
        <div className="container max-w-none">
          <div className="filter-buttons">
            <button data-filter="all">All</button>
            <button data-filter=".Best">Best Work</button>
            <button data-filter=".Next">Next Apps</button>
            <button data-filter=".React">React Apps</button>
            <button data-filter=".Mini">Mini Projects</button>
          </div>
          <div ref={galleryRef} className="portfolio-gallery scrollScale">
            {products.map(
              ({
                projectName,
                category,
                proDescribing,
                technologies,
                vercelHosting,
                githupLink,
              }) => (
                <PortfolioCard
                  key={projectName}
                  category={category}
                  projectName={projectName}
                  proDescribing={proDescribing}
                  technologies={technologies}
                  vercelHosting={vercelHosting}
                  githupLink={githupLink}
                />
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
