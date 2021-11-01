import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
// components
import Button from "../shared/UI/button/Button";
import "./Navbar.css";

const Navbar = () => {
  // context
  const { clearSearchedTeams } = useContext(TeamsContext);
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
      <Link to="/" onClick={clearSearchedTeams}>
        <h1>College Football MWS</h1>
      </Link>

      <Button className="button--logout" onClick={logout}>
        Logout <i className="fas fa-sign-out-alt"></i>
      </Button>
    </nav>
  );
};

export default Navbar;
