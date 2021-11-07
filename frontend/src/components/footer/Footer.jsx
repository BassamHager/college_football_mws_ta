import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="social">
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.snapchat.com/">
          <i className="fab fa-snapchat"></i>
        </a>
        <a href="https://twitter.com/">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
      <ul className="list--items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Terms</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
      <p className="copyright">© 2021 College Football MWS TA</p>\
    </footer>
  );
};

export default Footer;
