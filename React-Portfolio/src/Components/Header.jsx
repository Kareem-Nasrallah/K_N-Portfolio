import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const moodIcon = useRef(null);
  const modeChange = () => {
    if (moodIcon.current) {
      moodIcon.current.classList.toggle("bx-sun");
      moodIcon.current.classList.toggle("bxs-moon");
    }
  };

  return (
    <header>
      <div id="logo">
        <h3>
          <span>K N</span>asrallah
        </h3>
      </div>
      <nav>
        <h3 id="menu-logo">
          -- <span>K N</span>asrallah --
        </h3>
        <NavLink to="/" style={{ i: 1 }}>
          Home
        </NavLink>
        <NavLink to="about" style={{ i: 2 }}>
          About
        </NavLink>
        <NavLink to="skills" style={{ i: 3 }}>
          Skills
        </NavLink>
        <NavLink to="portfolio" style={{ i: 4 }}>
          portfolio
        </NavLink>
        <NavLink to="contact" style={{ i: 5 }}>
          Contact
        </NavLink>
        <label
          className="mode"
          htmlFor="modeInput"
          id="modeLabel"
          onClick={modeChange}
        >
          <i className="bx bxs-moon" ref={moodIcon} />
        </label>
        <input type="checkbox" id="modeInput" />
      </nav>
      <div id="menu-icon" className="bx bx-menu-alt-right" />
    </header>
  );
};

export default Header;
