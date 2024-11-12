import { useEffect, useRef, useState } from "react";
import "./colors.css";

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

  const [activeColor, setActiveColor] = useState(allColors[0].color);
  const themeRef = useRef(null);
  const displayedDivRef = useRef(null);

  const toggleBtnColor = () => {
    themeRef.current?.classList.toggle("activesetting");

    const isAppear = themeRef.current?.classList.contains("activesetting")
      ? "block"
      : "none";

    displayedDivRef.current.style.display = isAppear;
  };

  useEffect(() => {
    themeRef.current.classList.add("activesetting");
    displayedDivRef.current.style.display = "block";

    const scrolling = () => {
      if (themeRef.current.classList.contains("activesetting")) {
        themeRef.current.classList.remove("activesetting");
        displayedDivRef.current.style.display = "none";
      }
    };

    addEventListener("scroll", scrolling);

    return () => {
      removeEventListener("scroll", scrolling);
    };
  }, [themeRef]);

  const colorChosen = (color) => {
    themeRef.current.classList.remove("activesetting");
    displayedDivRef.current.style.display = "none";
    document.body.className = document.body.classList.contains("dark")
      ? `dark ${color}`
      : color;
    setActiveColor(color);
  };

  return (
    <div>
      <div id="displaiedpage" ref={displayedDivRef} />
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
                  className={`colorBox ${
                    activeColor === color ? "activeColor" : ""
                  }`}
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
