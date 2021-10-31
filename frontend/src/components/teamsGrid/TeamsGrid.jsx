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
    const storedTeams = localStorage.getItem("searched");
    const teams = JSON.parse(storedTeams);
    setCurrentTeams(teams?.length > 0 ? teams : loadedTeams);
  }, [setCurrentTeams, loadedTeams, match.url]);

  useEffect(() => {});

  return (
    <div className="teams--grid">
      {currentTeams?.map(({ id, school, logos }) => (
        <TeamCard key={id} id={id} school={school} logo={logos && logos[0]} />
      ))}
    </div>
  );
};

export default TeamsGrid;
