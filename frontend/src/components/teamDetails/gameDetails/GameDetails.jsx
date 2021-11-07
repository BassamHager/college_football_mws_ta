import { useContext, useEffect, useState } from "react";
import "./GameDetails.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
// components
import GameTeamStats from "./gameTeamStats/GameTeamStats";
import Button from "../../shared/UI/button/Button";

const GameDetails = ({ setContent }) => {
  // context
  const { gameStats } = useContext(TeamsContext);

  // internal state
  const [currentGameStats, setCurrentGameStats] = useState({});

  useEffect(() => {
    if (gameStats !== undefined) {
      const storedStats = localStorage.getItem("gameStats");
      const parsed = JSON.parse(storedStats);

      setCurrentGameStats(parsed ? parsed : gameStats);
    }
  }, [gameStats]);

  return (
    <div className="game--details--container">
      <Button onClick={() => setContent("previous")}>
        back to previous games
      </Button>

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
