import { useHistory } from "react-router-dom";
// components
import Button from "../shared/UI/button/Button";
import "./Navbar.css";

const Navbar = () => {
  // history
  const history = useHistory();

  // logout
  const logout = () => {
    localStorage.removeItem("isAuthorized");
    localStorage.removeItem("searched");
    history.push("/login");
  };

  return (
    <nav className="navbar">
      <div /* empty for styling purposes */ />
      <h1>College Football MWS</h1>

      <Button className="button--logout" onClick={logout}>
        Logout <i className="fas fa-sign-out-alt"></i>
      </Button>
    </nav>
  );
};

export default Navbar;
