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
    if (gameStats !== undefined) {
      const storedStats = localStorage.getItem("gameStats");

      setCurrentGameStats(storedStats ? JSON.parse(storedStats) : gameStats);
    }
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
