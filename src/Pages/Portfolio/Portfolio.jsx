import { useEffect, useRef } from "react";
import PortfolioImage from "../../Components/PortfolioImage";
import mixitup from "mixitup";
import "./portfolio.css";

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
          <button data-filter=".API">API Fetch</button>
          <button data-filter=".CRUDS">CRUDS</button>
        </div>
        <div ref={galleryRef} className="portfolio-gallery scrollScale">
          <PortfolioImage
            category="React API"
            projectName="E-Books"
            proDescribing="Free site to read e-books and enter the readers' community"
            vercelHosting="e-books-tawny.vercel.app"
          />
          <PortfolioImage
            category="React"
            projectName="NatureNest Realty"
            proDescribing="A site for real estate trade and investment"
            gitHosting={false}
          />
          <PortfolioImage
            category="CRUDS API"
            projectName="New Horizons"
            proDescribing="A travel and adventure website"
            gitHosting={true}
          />
          <PortfolioImage
            category="React API"
            projectName="Prayar Time"
            proDescribing="A website displaying a prayer times API"
            vercelHosting="prayar-time.vercel.app"
          />
          <PortfolioImage
            category=""
            projectName="Tazza"
            proDescribing="An e-commerce site for vegetables and fruits"
            gitHosting={true}
          />
          <PortfolioImage
            category="CRUDS"
            projectName="CRUDS"
            proDescribing="Merchandise store"
            gitHosting={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
