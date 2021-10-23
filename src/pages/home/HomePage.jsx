import { useContext, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

// context
import { AuthContext } from "../../context/auth/authContext";
import { TeamsContext } from "../../context/teams/teamsContext";

// components
import Navbar from "../../components/navbar/Navbar";
import TeamCard from "../../components/teamCard/TeamCard";

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
        {/* loading... */}

        {/* nav bar */}
        <Navbar />

        {/* teams grid */}
        <div className="teams--grid">
          {teams.map(({ id, school, logos }) => (
            <TeamCard
              key={id}
              id={id}
              school={school}
              logo={logos && logos[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
