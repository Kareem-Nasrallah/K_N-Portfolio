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
          <button data-filter=".Next">Next App</button>
          <button data-filter=".React">React App</button>
          <button data-filter=".API">API Fetch</button>
          <button data-filter=".Cart">Cart</button>
          <button data-filter=".Authentication">Authentication</button>
        </div>
        <div ref={galleryRef} className="portfolio-gallery scrollScale">
          <PortfolioImage
            category="Next API Cart Authentication"
            projectName="Next Amazon"
            proDescribing="E-commerce site similar to Amazon."
            technologies="Next, TypeScript, Redux Toolkit, Tailwind"
            githupLink="https://github.com/Kareem-Nasrallah/next-amazon"
            vercelHosting="https://next-amazon-lake.vercel.app"
          />
          <PortfolioImage
            category="React API Authentication"
            projectName="Task Flow"
            proDescribing="A site for creating to-do lists and tracking all the tasks for each list."
            technologies="React, TypeScript, Redux Toolkit, Axios, Tailwind, Daisyui, Formik, Yup, Bcryptjs"
            vercelHosting="https://to-do-list-gamma-liard-48.vercel.app"
            githupLink="https://github.com/Kareem-Nasrallah/to-do_list"
          />
          <PortfolioImage
            category="React Cart"
            projectName="Flavoro Foods"
            proDescribing="Food shopping site."
            technologies="React, TypeScript, Redux Toolkit, Tailwind"
            vercelHosting="https://flavoro-foods.vercel.app"
            githupLink="https://github.com/Kareem-Nasrallah/flavoro-foods"
          />
          <PortfolioImage
            category="React API"
            projectName="E-Books"
            proDescribing="Free site to read e-books and enter the readers' community."
            technologies="React, JavaScript, Axios, Swiper, Bootstrap"
            vercelHosting="https://e-books-tawny.vercel.app"
          />
          <PortfolioImage
            category="React API Authentication"
            projectName="NatureNest Realty"
            proDescribing="A platform for buying, selling, and exploring real estate listings."
            technologies="React, JavaScript, Axios, Swiper, Bootstrap"
            githupLink="https://github.com/Kareem-Nasrallah/naturenest_realty_frontend"
          />
          <PortfolioImage
            category="React API"
            projectName="Rnscinemas"
            proDescribing="A site showcasing current and upcoming movies in cinemas, along with cinema locations."
            technologies="React, TypeScript, Swiper, Axios, Tailwind"
            vercelHosting="https://rnscinemas.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
