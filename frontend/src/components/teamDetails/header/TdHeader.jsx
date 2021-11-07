import "./TdHeader.css";
import { useHistory } from "react-router-dom";
// components
import Button from "../../shared/UI/button/Button";

const TdHeader = ({ currentTeamDetails }) => {
  // history
  const history = useHistory();

  const goHomeBtn = () => {
    localStorage.removeItem("teamDetails");
    localStorage.removeItem("previousGames");
    localStorage.removeItem("upcomingGames");
    localStorage.removeItem("gameStats");
    history.goBack();
  };

  return (
    <div className="container">
      <div className="heading--bar">
        <div></div>

        {/* title */}
        <h2 className="team--title">
          {currentTeamDetails?.school || "unknown name"} -{" "}
          {currentTeamDetails.abbreviation || "unknown abbreviation"}
        </h2>

        {/* go back button */}
        <Button className="button--back" onClick={goHomeBtn}>
          Home <i className="fas fa-arrow-left"></i>
        </Button>
      </div>
    </div>
  );
};

export default TdHeader;
