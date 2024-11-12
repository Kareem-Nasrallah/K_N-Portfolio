import React from "react";

const PortfolioImage = (props) => {
  return (
    <>
      <div className={`port-box portfolio-item ${props.category}`}>
        <div className="port-image">
          <img src={`/portfolio/${props.projectName}.jpg`} alt="" />
        </div>
        <div className="port-content">
          <h3>{props.projectName}</h3>
          <p>{props.proDescribing}</p>
          <div className="portoLinks">
            <a
              href={`https://github.com/Kareem-Nasrallah/${props.projectName}`}
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            {props.hosting && (
              <a
                href={`https://kareem-nasrallah.github.io/${props.projectName}`}
                target="_blank"
              >
                <i className="bx bx-link-external"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioImage;
