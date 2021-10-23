import "./TeamsGrid.css";

// components
import TeamCard from "../../components/teamCard/TeamCard";

const TeamsGrid = ({ displayedTeams }) => {
  return (
    <div className="teams--grid">
      {displayedTeams.map(({ id, school, logos }) => (
        <TeamCard key={id} id={id} school={school} logo={logos && logos[0]} />
      ))}
    </div>
  );
};

export default TeamsGrid;
