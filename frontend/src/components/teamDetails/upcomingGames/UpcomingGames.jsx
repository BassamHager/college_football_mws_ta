import { useContext, useEffect, useState } from "react";
import "./UpcomingGames.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
import GameDetails from "../gameDetails/GameDetails";

const UpcomingGames = () => {
  // context
  const { upcomingGames } = useContext(TeamsContext);

  // internal state
  const [currentUpcomingGames, setCurrentUpcomingGames] = useState([]);

  useEffect(() => {
    const storedGames = localStorage.getItem("upcomingGames");
    const parsedGames = JSON.parse(storedGames);

    setCurrentUpcomingGames(parsedGames ? parsedGames : upcomingGames);
  }, [setCurrentUpcomingGames, upcomingGames]);

  return (
    <div className="games--container">
      {currentUpcomingGames?.map((game) => (
        <GameDetails key={game.id} game={game} />
      ))}

      {!currentUpcomingGames ||
        (currentUpcomingGames.length === 0 && <h2>No more upcoming games!</h2>)}
    </div>
  );
};

export default UpcomingGames;
