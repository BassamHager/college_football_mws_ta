import { useCallback, useContext, useEffect, useState } from "react";
import "./TeamDetailsPage.css";
import { withRouter } from "react-router-dom";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
// components
import TdHeader from "../../components/teamDetails/header/TdHeader";
import TdLogoAndBtns from "../../components/teamDetails/logoAndBtns/TdLogoAndBtns";
import TdGeneralDetails from "../../components/teamDetails/generalDetails/TdGeneralDetails";

const TeamDetails = ({ match }) => {
  // context
  const { getTeamDetails, teamDetails } = useContext(TeamsContext);

  // internal state
  const [currentTeamDetails, setCurrentTeamDetails] = useState({});

  // get and toggle team details using id in match params
  const getAndToggleTeamDetails = useCallback(
    (id) => {
      getTeamDetails(id);

      const storedTeamDetails = localStorage.getItem("teamDetails");
      const jsonDetails = JSON.parse(storedTeamDetails);

      setCurrentTeamDetails(jsonDetails ? jsonDetails : teamDetails);
    },
    [getTeamDetails, teamDetails]
  );

  useEffect(
    () => getAndToggleTeamDetails(match.params.id),
    [getAndToggleTeamDetails, match]
  );

  return (
    <div className="details--container">
      <div className="container">
        {/* heading bar */}
        <TdHeader currentTeamDetails={currentTeamDetails} />

        {/* container of two siblings */}
        <div className="flex--container">
          {/* logo & buttons container */}
          <TdLogoAndBtns currentTeamDetails={currentTeamDetails} />

          {/* general details container */}
          <TdGeneralDetails currentTeamDetails={currentTeamDetails} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(TeamDetails);
