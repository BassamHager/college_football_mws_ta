import { useContext, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

// context
import { AuthContext } from "../../context/auth/authContext";
import { TeamsContext } from "../../context/teams/teamsContext";

// components
import Button from "../../components/shared/UI/button/Button";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);
  const { getTeams, teams } = useContext(TeamsContext);

  // force redirect to login page
  useEffect(() => {
    !isAuthorized ? history.push("/login") : getTeams();
  }, [isAuthorized, history]);

  return (
    <div className="home">
      <Button className="button--logout" onClick={() => setIsAuthorized(false)}>
        Logout <i className="fas fa-sign-out-alt"></i>
      </Button>

      {teams.map((team) => (
        <h3 key={team.id}> {team.abbreviation} </h3>
      ))}
    </div>
  );
};

export default HomePage;
