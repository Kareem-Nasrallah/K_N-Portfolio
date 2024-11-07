import { useEffect, useRef } from "react";

const Colors = ({ fristIn }) => {
  const allColors = [
    {
      color: "blue",
      liteColor: "#02e1ff",
      mediumColor: "#0275ff",
      heavyColor: "#023dff",
    },
    {
      color: "green",
      liteColor: "#3fc002",
      mediumColor: "#0bac20",
      heavyColor: "#0e570b",
    },
    {
      color: "orange",
      liteColor: "#ffa500",
      mediumColor: "#ff7500",
      heavyColor: "#ff3500",
    },
    {
      color: "purple",
      liteColor: "#a786f5",
      mediumColor: "#5a02c9",
      heavyColor: "#2e055f",
    },
  ];

  const themeRef = useRef(null);
  const displaiedDivRef = useRef(null);

  const toggleBtnColor = () => {
    themeRef.current.classList.toggle("activesetting");
    displaiedDivRef.current.style.display = themeRef.current.classList.contains(
      "activesetting"
    )
      ? "block"
      : "none";
  };

  onscroll = () => {
    themeRef.current.classList.remove("activesetting");
    displaiedDivRef.current.style.display = "none";
  };

  fristIn
    ? useEffect(() => {
        themeRef.current.classList.add("activesetting");
        displaiedDivRef.current.style.display = "block";
      }, [])
    : "";

  const colorChosen = (color) => {
    themeRef.current.classList.remove("activesetting");
    displaiedDivRef.current.style.display = "none";
    document.body.className = document.body.classList.contains("dark")
      ? `dark ${color}`
      : color;
  };

  return (
    <div>
      <div id="displaiedpage" ref={displaiedDivRef} />
      <div ref={themeRef} className="theamSettings">
        <div className="togglebtn" onClick={toggleBtnColor}>
          <i className="bx bxs-cog" />
        </div>
        <div className="wrapper">
          <h3>chose your fv color</h3>
          <div id="colorsDev">
            {allColors.map(
              ({ color, liteColor, mediumColor, heavyColor }, i) => (
                <div
                  className="colorBox"
                  key={i}
                  id={color}
                  onClick={() => colorChosen(color)}
                  style={{
                    background: `linear-gradient(
                      180deg,  ${liteColor} 0%,  ${mediumColor} 51%,  ${heavyColor} 100%
                    )`,
                  }}
                >
                  <i className="bx bx-check"></i>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
