import React from "react";

const Point = ({ pointId }) => {
  return (
    <div
      className={`mt-3 md:mt-0 w-2 h-2 rounded-full bg-(--hover-color)/40 shadow-2xs group-hover:bg-(--hover-color) duration-400
      ${pointId === "?ch=1#journey" && " mt-3!"}`}
    ></div>
  );
};

export default Point;
