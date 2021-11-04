import { useContext } from "react";
import "./GameDetails.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
// components
import GameTeamStats from "./gameTeamStats/GameTeamStats";

const GameDetails = ({ setContent }) => {
  // context
  const { gameStats } = useContext(TeamsContext);

  return (
    <div className="game--details--container">
      <button onClick={() => setContent("previous")}>back</button>

      <div className="teams">
        <GameTeamStats team={gameStats?.teams[0]} />
        <GameTeamStats team={gameStats?.teams[1]} />
      </div>
    </div>
  );
};

export default GameDetails;
