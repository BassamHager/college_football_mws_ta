import { useContext, useEffect, useState } from "react";
import "./TdPreviousGames.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
import GameDetails from "../gameDetails/GameDetails";

const TdPreviousGames = () => {
  // context
  const { previousGames } = useContext(TeamsContext);

  // internal state
  const [currentPreviousGames, setCurrentPreviousGames] = useState([]);

  useEffect(() => {
    const storedGames = localStorage.getItem("previousGames");
    const parsedGames = JSON.parse(storedGames);

    setCurrentPreviousGames(parsedGames ? parsedGames : previousGames);
  }, [setCurrentPreviousGames, previousGames]);

  return (
    <div className="games--container">
      {currentPreviousGames?.map((game, i) => (
        <GameDetails key={game.startTime + i} game={game} />
      ))}

      {!currentPreviousGames ||
        (currentPreviousGames.length === 0 && <h2>No previous games!</h2>)}
    </div>
  );
};

export default TdPreviousGames;
