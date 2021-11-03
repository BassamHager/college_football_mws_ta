import { useCallback, useContext } from "react";
import "./TdLogoAndBtns.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";

const TdLogoAndBtns = ({ currentTeamDetails, setContent }) => {
  // context
  const { getUpcomingGames } = useContext(TeamsContext);

  // get upcoming games
  const getComingGames = useCallback(
    (teamName) => {
      setContent("upcoming");
      getUpcomingGames(teamName);
    },
    [getUpcomingGames, setContent]
  );

  return (
    <div className="logo--container">
      <div className="details--buttons">
        <button>previous games</button>
        <button onClick={() => getComingGames(currentTeamDetails?.school)}>
          upcoming games
        </button>
      </div>

      <img
        src={
          (currentTeamDetails?.logos && currentTeamDetails.logos[0]) ||
          "https://live.staticflickr.com/1878/44377254611_96d0b13955_b.jpg"
        }
        alt={currentTeamDetails?.school}
      />
      <button onClick={() => setContent("details")}>team details</button>
    </div>
  );
};

export default TdLogoAndBtns;
