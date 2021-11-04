import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-basic">
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
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">Services</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">About</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">Terms</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
      <p className="copyright">© 2021 College Football MWS TA</p>\
    </footer>
  );
};

export default Footer;
