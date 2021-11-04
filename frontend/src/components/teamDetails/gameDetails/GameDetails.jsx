import { useContext, useEffect, useState } from "react";
import "./GameDetails.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
// components
import GameTeamStats from "./gameTeamStats/GameTeamStats";

const GameDetails = ({ setContent }) => {
  // context
  const { gameStats } = useContext(TeamsContext);

  // internal state
  const [currentGameStats, setCurrentGameStats] = useState({});

  useEffect(() => {
    const storedStats = localStorage.getItem("gameStats");
    const parsedStats = JSON.parse(storedStats);
    setCurrentGameStats(parsedStats ? parsedStats : gameStats);
  }, [gameStats]);

  return (
    <div className="game--details--container">
      <button onClick={() => setContent("previous")}>back</button>

      <div className="teams">
        <GameTeamStats
          team={currentGameStats?.teams && currentGameStats.teams[0]}
        />
        <GameTeamStats
          team={currentGameStats?.teams && currentGameStats.teams[1]}
        />
      </div>
    </div>
  );
};

export default GameDetails;
