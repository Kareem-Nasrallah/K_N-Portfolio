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
      <div className="container max-w-none">
        <div className="filter-buttons">
          <button data-filter="all">All</button>
          <button data-filter=".Next">Next App</button>
          <button data-filter=".React">React App</button>
          <button data-filter=".API">API Fetch</button>
          <button data-filter=".CRUD">CRUD</button>
          <button data-filter=".Authentication">Authentication</button>
        </div>
        <div ref={galleryRef} className="portfolio-gallery scrollScale">
          <PortfolioImage
            category="React Authentication CRUD"
            projectName="Biscuit Factory System"
            proDescribing="Complete Factory Management System for managing production lines, inventory, staff, and quality reports."
            technologies="React, TypeScript, Redux Toolkit, Formik, Yup, Tailwind, i18next, shadcn/ui (Radix UI)"
            vercelHosting="https://biscuit-factory-system.vercel.app/"
            githupLink="https://github.com/Kareem-Nasrallah/biscuit-factory-system"
          />
          <PortfolioImage
            category="React API CRUD Authentication"
            projectName="Task Flow"
            proDescribing="A site for creating to-do lists and tracking all the tasks for each list."
            technologies="React, TypeScript, Redux Toolkit, Axios, Tailwind, Daisyui, Formik, Yup, Bcryptjs"
            vercelHosting="https://to-do-list-gamma-liard-48.vercel.app"
            githupLink="https://github.com/Kareem-Nasrallah/to-do_list"
          />
          <PortfolioImage
            category="Next API CRUD Authentication"
            projectName="Next Amazon"
            proDescribing="E-commerce site similar to Amazon."
            technologies="Next, TypeScript, Redux Toolkit, Tailwind"
            githupLink="https://github.com/Kareem-Nasrallah/next-amazon"
            vercelHosting="https://next-amazon-lake.vercel.app"
          />
          <PortfolioImage
            category="React CRUD"
            projectName="Flavoro Foods"
            proDescribing="Food shopping site."
            technologies="React, TypeScript, Redux Toolkit, Tailwind"
            vercelHosting="https://flavoro-foods.vercel.app"
            githupLink="https://github.com/Kareem-Nasrallah/flavoro-foods"
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
