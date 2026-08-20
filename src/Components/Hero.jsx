import { useEffect, useRef } from "react";

const Hero = ({ title, bgImage, subtitle }) => {
  const pageTitle = useRef(null);

  useEffect(() => {
    pageTitle.current?.classList.add("show-items");
    return () => {
      pageTitle.current?.classList.remove("show-items");
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-[460px] mt-[59px] bg-cover bg-center px-[10%] flex flex-col justify-center relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-(--hero-bg-color)/50 before:to-(--hero-bg-color)/20"
    >
      <div ref={pageTitle} className="scrollScale">
        {subtitle && (
          <p className="text-2xl !text-(--text-porto-color)">{subtitle} </p>
        )}
        <h2 className="title mb-4 relative z-10">
          <span>{title}</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
