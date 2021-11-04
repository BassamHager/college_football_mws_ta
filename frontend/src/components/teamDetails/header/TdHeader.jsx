import "./TdHeader.css";
import { useHistory } from "react-router-dom";
// components
import Button from "../../shared/UI/button/Button";

const TdHeader = ({ currentTeamDetails }) => {
  // history
  const history = useHistory();

  return (
    <div className="heading--bar">
      {/* title */}
      <h2 className="team--title">
        {currentTeamDetails?.school || "unknown name"} -{" "}
        {currentTeamDetails.abbreviation || "unknown abbreviation"}
      </h2>

      {/* go back button */}
      <Button className="button--back" onClick={() => history.goBack()}>
        Back <i className="fas fa-arrow-left"></i>
      </Button>
    </div>
  );
};

export default TdHeader;
