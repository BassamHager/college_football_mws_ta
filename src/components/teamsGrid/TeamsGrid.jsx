import { useContext } from "react";
// components
import TeamCard from "../../components/teamCard/TeamCard";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
import "./TeamsGrid.css";

const TeamsGrid = () => {
  // context
  const { displayedTeams } = useContext(TeamsContext);

  return (
    <div className="teams--grid">
      {displayedTeams.map(({ id, school, logos }) => (
        <TeamCard key={id} id={id} school={school} logo={logos && logos[0]} />
      ))}
    </div>
  );
};

export default TeamsGrid;
