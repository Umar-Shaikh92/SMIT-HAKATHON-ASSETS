import { Link } from "react-router";
import "./Footer.css";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
          />
        </div>

        <ul className="footer-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="footer-auth">
          <Link to="/login" className="footer-btn">
            Login
          </Link>
          <Link to="/signup" className="footer-btn btn-primary">
            Register
          </Link>
        </div>
      </div>
      <div className="footer-social">
        <a
          href="https://github.com/Umar-Shaikh92"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/glyph-neue/50/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/umar-shaikh-949390255/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.facebook.com/share/1bi4Fbb39n/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/facebook-new.png"
            alt="facebook-new"
          />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All rights reserved by Muhammad Umar Shaikh.</p>
      </div>
    </footer>
  );
};

export default Footer;
