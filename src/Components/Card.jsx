const Card = ({ imgSrc, title, subtitle, description }) => {
  return (
    <div>
      <img src={imgSrc} alt={title} className="w-full"/>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
