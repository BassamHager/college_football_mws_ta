import { useContext, useEffect, useState } from "react";
import "./TdPreviousGames.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
import GameDetailsCard from "../gameDetailsCard/GameDetailsCard";

const TdPreviousGames = ({ setContent }) => {
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
    <div className="games--container previous--game">
      {currentPreviousGames?.map((game, i) => (
        <GameDetailsCard
          key={game.startTime + i}
          game={game}
          setContent={setContent}
        />
      ))}

      {!currentPreviousGames ||
        (currentPreviousGames.length === 0 && <h2>No previous games!</h2>)}
    </div>
  );
};

export default TdPreviousGames;
