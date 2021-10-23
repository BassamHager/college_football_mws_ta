import { useContext } from "react";
import "./Navbar.css";

// components
import Button from "../shared/UI/button/Button";

// context
import { AuthContext } from "../../context/auth/authContext";

const Navbar = () => {
  // context
  const { setIsAuthorized } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div /* empty for styling purposes */ />
      <h1>College Football MWS</h1>

      <Button className="button--logout" onClick={() => setIsAuthorized(false)}>
        Logout <i className="fas fa-sign-out-alt"></i>
      </Button>
    </nav>
  );
};

export default Navbar;
