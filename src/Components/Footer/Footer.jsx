import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        copyright © 2024 by{" "}
        <span>
          <Link id="copyrightKareem" to="/">
            K_Nasrallah
          </Link>
        </span>{" "}
        || All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
