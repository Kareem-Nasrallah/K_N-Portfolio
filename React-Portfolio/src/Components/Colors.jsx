import { useRef } from "react";

const Colors = () => {
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
  };
  onload = (_) => {
    themeRef.current.classList.add("activesetting");
  };

  const colorChosen = (color) => {
    themeRef.current.classList.remove("activesetting");
    displaiedDivRef.current.style.display = "none";
    if (document.body.classList.contains("dark")) {
      document.body.className = "dark";
      document.body.classList.add(color);
    } else {
      document.body.className = color;
    }
  };

  return (
    <div>
      {themeRef.current.classList.contains("activesetting") && (
        <div id="displaiedpage" ref={displaiedDivRef} />
      )}
      <div ref={themeRef} className="theamSettings">
        <div className="togglebtn" onClick={toggleBtnColor}>
          <i className="bx bxs-cog" />
        </div>
        <div className="wrapper">
          <h3>chose your color</h3>
          <div id="colorsDev">
            {allColors.map(
              ({ color, liteColor, mediumColor, heavyColor }, i) => (
                <div
                  className="colorBox"
                  key={i}
                  id={color}
                  onClick={() => colorChosen(color)}
                  style={{
                    "--color": `linear-gradient(
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
