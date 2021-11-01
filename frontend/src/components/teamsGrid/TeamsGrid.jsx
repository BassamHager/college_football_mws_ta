import { useState, useContext, useEffect } from "react";
// components
import TeamCard from "../../components/teamCard/TeamCard";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
import "./TeamsGrid.css";

const TeamsGrid = ({ match }) => {
  // context
  const { loadedTeams } = useContext(TeamsContext);

  // internal state
  const [currentTeams, setCurrentTeams] = useState([]);

  // display only searched teams on search
  useEffect(() => {
    if (match.url === "/") setCurrentTeams(loadedTeams);
    else {
      const storedTeams = localStorage.getItem("searched");
      let teams;
      if (storedTeams) teams = JSON.parse(storedTeams);
      setCurrentTeams(teams?.length > 0 ? teams : []);
    }
  }, [setCurrentTeams, loadedTeams, match]);

  return (
    <div className="teams--grid">
      {currentTeams?.map(({ id, school, logos }) => (
        <TeamCard key={id} id={id} school={school} logo={logos && logos[0]} />
      ))}
    </div>
  );
};

export default TeamsGrid;
