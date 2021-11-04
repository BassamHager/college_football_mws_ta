import { useContext } from "react";
import { TeamsContext } from "../../../context/teams/teamsContext";
import "./GameDetailsCard.css";

const GameDetails = ({ game, setContent }) => {
  // context
  const { getGameStats } = useContext(TeamsContext);

  return (
    <div
      key={game?.id}
      className="gd--container"
      onClick={() => {
        getGameStats(game?.season, game?.homeTeam, game?.id);
        setContent("gameDetails");
      }}
    >
      <div className="opponents">
        <h3>Home</h3>
        <h3>Away</h3>
      </div>

      <div className="opponents">
        <h4> {game?.homeTeam} </h4>
        <h4> {game?.awayTeam} </h4>
      </div>

      <div className="rest--details">
        <h4>
          <span>Outlet:</span> {game?.outlet}
        </h4>
        <h4>
          <span>Season:</span> {game?.season}
        </h4>
        <h4>
          <span>Week:</span> {game?.week}
        </h4>
        <h4>
          <span>Date:</span>
          {new Date(game?.startTime)?.toLocaleString()?.split(",")[0]}
        </h4>
        <h4>
          <span>Time:</span>
          {new Date(game?.startTime)?.toLocaleString()?.split(",")[1]?.trim()}
        </h4>
      </div>
    </div>
  );
};

export default GameDetails;
