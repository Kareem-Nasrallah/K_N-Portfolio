const Card = ({ education }) => {
  return (
    <div className="flex flex-col flex-1 rounded-lg overflow-hidden max-w-[420px] bg-[var(--card-bg)] hover:bg-[var(--card-hover-bg)] transition-all duration-300 shadow-lg">
      <div className="h-60">
        <img
          src={education.imgSrc}
          alt={education.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4 border-4 border-t-0 border-gray-400 rounded-b-lg shadow-md">
        <h3>{education.title}</h3>
        <h4>{education.subtitle}</h4>
        <p>{education.description}</p>
      </div>
    </div>
  );
};

export default Card;
