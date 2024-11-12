import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
  const moodIcon = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const menuIcon = useRef(null);

  const modeChange = () => {
    if (moodIcon.current) {
      moodIcon.current.classList.toggle("bx-sun");
      moodIcon.current.classList.toggle("bxs-moon");
      document.body.classList.toggle("dark");
    }
  };

  const openOrCLose = (e) => {
    logoRef.current.classList.toggle("openClosLogo");
    navRef.current.classList.toggle("openMenu");
    menuIcon.current.classList.toggle("bx-x");
  };

  const handleScroll = () => {
    logoRef.current.classList.remove("openClosLogo");
    navRef.current.classList.remove("openMenu");
    menuIcon.current.classList.remove("bx-x");
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div id="logo" ref={logoRef}>
        <h3>
          <span>K N</span>asrallah
        </h3>
      </div>
      <nav ref={navRef}>
        <h3 id="menu-logo">
          -- <span>K N</span>asrallah --
        </h3>
        <NavLink onClick={handleScroll} to="/" style={{ i: 1 }}>
          Home
        </NavLink>
        <NavLink onClick={handleScroll} to="about" style={{ i: 2 }}>
          About
        </NavLink>
        <NavLink onClick={handleScroll} to="skills" style={{ i: 3 }}>
          Skills
        </NavLink>
        <NavLink onClick={handleScroll} to="portfolio" style={{ i: 4 }}>
          portfolio
        </NavLink>
        <NavLink onClick={handleScroll} to="contact" style={{ i: 5 }}>
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
      <div
        id="menu-icon"
        ref={menuIcon}
        className="bx bx-menu-alt-right"
        onClick={openOrCLose}
      />
    </header>
  );
};

export default Header;
