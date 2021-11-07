import { useCallback, useContext } from "react";
import "./TdLogoAndBtns.css";
// context
import { TeamsContext } from "../../../context/teams/teamsContext";
// components
import Button from "../../shared/UI/button/Button";

const TdLogoAndBtns = ({ currentTeamDetails, setContent }) => {
  // context
  const { getUpcomingGames, getPreviousGames } = useContext(TeamsContext);

  // handle upcoming games
  const handleComingGames = useCallback(
    (teamName) => {
      setContent("upcoming");
      getUpcomingGames(teamName);
    },
    [getUpcomingGames, setContent]
  );

  // handle previous games
  const handlePreviousGames = useCallback(
    (teamName) => {
      setContent("previous");
      getPreviousGames(teamName);
    },
    [getPreviousGames, setContent]
  );

  return (
    <div className="logo--container">
      <div className="details--buttons">
        <Button onClick={() => handlePreviousGames(currentTeamDetails?.school)}>
          previous games
        </Button>
        <Button onClick={() => handleComingGames(currentTeamDetails?.school)}>
          upcoming games
        </Button>
        <Button onClick={() => setContent("details")}>team details</Button>
      </div>

      <img
        src={
          (currentTeamDetails?.logos && currentTeamDetails.logos[0]) ||
          "https://live.staticflickr.com/1878/44377254611_96d0b13955_b.jpg"
        }
        alt={currentTeamDetails?.school}
      />
    </div>
  );
};

export default TdLogoAndBtns;
