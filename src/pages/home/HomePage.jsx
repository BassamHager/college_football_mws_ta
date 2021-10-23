import { useContext, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

// context
import { AuthContext } from "../../context/auth/authContext";
import { TeamsContext } from "../../context/teams/teamsContext";

// components
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { isAuthorized } = useContext(AuthContext);
  const { getTeams, teams } = useContext(TeamsContext);

  // force redirect to login page
  useEffect(() => {
    !isAuthorized ? history.push("/login") : getTeams();
  }, [isAuthorized, history, getTeams]);

  return (
    <div className="home">
      <div className="container">
        {/* nav bar */}
        <Navbar />

        {/*  */}

        {teams.map((team) => (
          <h3 key={team.id}> {team.abbreviation} </h3>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
