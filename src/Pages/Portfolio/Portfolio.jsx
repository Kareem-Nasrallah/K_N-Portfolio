import { useEffect, useRef } from "react";
import PortfolioImage from "../../Components/PortfolioImage";
import mixitup from "mixitup";
import "./portfolio.css";
import Hero from "../../Components/Hero";

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
            <PortfolioImage
              category="React Best"
              projectName="LUXE"
              proDescribing="A complete e-commerce experience featuring product browsing, cart & wishlist, secure checkout, and multilingual responsive design."
              technologies="React, TypeScript, Sanity, Swiper, Formik, Yup, Tailwind, shadcn/ui"
              vercelHosting="https://luxe-two-pink.vercel.app/"
            />
            <PortfolioImage
              category="Next Best"
              projectName="KN Directory"
              proDescribing="A web app for publishing and discovering startups with GitHub login and search functionality."
              technologies="Next, TypeScript, Next Auth, Sanity, Zod, Tailwind, shadcn/ui"
              vercelHosting="https://kn-directory.vercel.app/"
              githupLink="https://github.com/Kareem-Nasrallah/kn_directory"
            />
            <PortfolioImage
              category="React Best"
              projectName="Biscuit Factory System"
              proDescribing="Complete Factory Management System for managing production lines, inventory, staff, and quality reports."
              technologies="React, TypeScript, Redux Toolkit, Formik, Yup, Tailwind, i18next, shadcn/ui"
              vercelHosting="https://biscuit-factory-system.vercel.app/"
              githupLink="https://github.com/Kareem-Nasrallah/biscuit-factory-system"
            />
            <PortfolioImage
              category="React Mini"
              projectName="Task Flow"
              proDescribing="A site for creating to-do lists and tracking all the tasks for each list."
              technologies="React, TypeScript, Redux Toolkit, Axios, Tailwind, Daisyui, Formik, Yup, Bcryptjs"
              vercelHosting="https://to-do-list-gamma-liard-48.vercel.app"
              githupLink="https://github.com/Kareem-Nasrallah/to-do_list"
            />
            <PortfolioImage
              category="Next Mini"
              projectName="Next Amazon"
              proDescribing="E-commerce site similar to Amazon."
              technologies="Next, TypeScript, Next Auth, Redux Toolkit, Tailwind"
              githupLink="https://github.com/Kareem-Nasrallah/next-amazon"
              vercelHosting="https://next-amazon-lake.vercel.app"
            />
            <PortfolioImage
              category="React Mini"
              projectName="Flavoro Foods"
              proDescribing="Food shopping site."
              technologies="React, TypeScript, Redux Toolkit, Tailwind"
              vercelHosting="https://flavoro-foods.vercel.app"
              githupLink="https://github.com/Kareem-Nasrallah/flavoro-foods"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
