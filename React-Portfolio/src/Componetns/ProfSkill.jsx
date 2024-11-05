import React from "react";

const ProfSkill = (props) => {
  return (
    <div class="box">
      <div class="circle" data-dots="80" data-percent={props.percentage}></div>
      <div class="text">
        <span class="big">{props.percentage}%</span>
        <small>{props.name}</small>
      </div>
    </div>
  );
};

export default ProfSkill;
