import { useEffect, useRef } from "react";

const ProfSkill = (props) => {
  const allDots = 80;
  const markedDots = Math.floor((allDots * props.percentage) / 100);
  const rotate = 360 / allDots;
  const circleRef = useRef(null);

  useEffect(() => {
    const pointsMarked = circleRef.current.querySelectorAll(".points");
    for (let i = 0; i < markedDots; i++) {
      pointsMarked[i].classList.add("marked");
    }
  }, [markedDots]);

 return (
    <div className="box">
      <div className="circle" ref={circleRef}>
        {Array.from({ length: allDots }).map((_, i) => (
          <div
            key={i}
            className="points"
            style={{ "--i": i, "--rot": `${rotate}deg` }}
          ></div>
        ))}
      </div>
      <div className="text">
        <span className="big">{props.percentage}%</span>
        <small>{props.name}</small>
      </div>
    </div>
  );
};

export default ProfSkill;
