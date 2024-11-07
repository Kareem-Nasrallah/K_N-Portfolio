import { useEffect } from "react";
import PortfolioImage from "../Components/portfolioImage";

const Portfolio = () => {

  useEffect(() => {
    mixitup(".portfolio-gallery");
  }, []);

  return (
    <section id="portfolio">
      <div className="main-text">
        <span>What can i do for you</span>
        <h2>
          <span>Latest Projects</span>
        </h2>
      </div>
      <div className="container">
        <div className="filter-buttons">
          <button data-filter="all">All</button>
          <button data-filter=".React">React App</button>
          <button data-filter=".Interactive">Interactive</button>
          <button data-filter=".CRUDS">CRUDS</button>
        </div>
        <div className="portfolio-gallery">
          <PortfolioImage
            category="React"
            projectName="NatureNest Realty"
            proDescribing="A site for real estate trade and investment"
            hosting={false}
          />
          <PortfolioImage
            category="Interactive CRUDS"
            projectName="New Horizons"
            proDescribing="A travel and adventure website"
            hosting={true}
          />
          <PortfolioImage
            category="React Interactive"
            projectName="Prayar Time"
            proDescribing="A website displaying a prayer times API"
            hosting={false}
          />
          <PortfolioImage
            category=""
            projectName="Tazza"
            proDescribing="An e-commerce site for vegetables and fruits"
            hosting={true}
          />
          <PortfolioImage
            category="CRUDS Interactive"
            projectName="CRUDS"
            proDescribing="Merchandise store"
            hosting={true}
          />
          <PortfolioImage
            category="Interactive"
            projectName="Editor"
            proDescribing="A site for uploading and editing images"
            hosting={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
