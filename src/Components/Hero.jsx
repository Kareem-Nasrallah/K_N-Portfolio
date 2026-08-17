const Hero = ({ title, bgImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-[460px] mt-16 bg-cover bg-center px-[10%] flex items-center  relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/10 before:to-transparent"
    >
      <h2 className="title mb-4">
        <span>{title}</span>
      </h2>
    </div>
  );
};

export default Hero;
