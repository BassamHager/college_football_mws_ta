import { useCallback, useContext, useEffect, useState } from "react";
import "./TeamDetailsPage.css";
import { withRouter, useHistory } from "react-router-dom";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
// components
import Button from "../../components/shared/UI/button/Button";

const TeamDetails = ({ match }) => {
  // context
  const { getTeamDetails, teamDetails } = useContext(TeamsContext);

  // internal state
  const [currentTeamDetails, setCurrentTeamDetails] = useState({});

  // history
  const history = useHistory();

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

  useEffect(() => {
    getAndToggleTeamDetails(match.params.id);
  }, [getAndToggleTeamDetails, match]);

  return (
    <div className="details--container">
      <div className="container">
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

        {/* container of two siblings */}
        <div className="flex--container">
          {/* logo img container */}
          <div className="logo--container">
            <div className="details--buttons">
              <button>previous games</button>
              <button>upcoming games</button>
            </div>

            <img
              src={
                (currentTeamDetails?.logos && currentTeamDetails.logos[0]) ||
                "https://live.staticflickr.com/1878/44377254611_96d0b13955_b.jpg"
              }
              alt={currentTeamDetails?.school}
            />
            <button>team details</button>
          </div>

          {/* written details container */}
          <div className="content--container">
            <div className="field--info">
              <span>mascot </span>
              <span> {currentTeamDetails?.mascot || "unknown"} </span>
            </div>

            <div className="field--info">
              <span>conference </span>
              <span> {currentTeamDetails?.conference || "unknown"} </span>
            </div>

            <div className="field--info">
              <span>division</span>
              <span> {currentTeamDetails?.division || "unknown"} </span>
            </div>
            <div className="field--info color">
              <span>color </span>
              <span style={{ background: currentTeamDetails?.color }}>
                {" "}
                {currentTeamDetails?.color || "unknown"}
              </span>
            </div>
            <div className="field--info">
              <span>alt_color </span>
              <span style={{ background: currentTeamDetails?.alt_color }}>
                {" "}
                {currentTeamDetails?.alt_color || "unknown"}
              </span>
            </div>
            <div className="field--info">
              {/* location */}
              <span>venue_id</span>
              <span>
                {" "}
                {currentTeamDetails?.location?.venue_id || "unknown"}{" "}
              </span>
            </div>
            <div className="field--info">
              <span>name</span>
              <span> {currentTeamDetails?.location?.name || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>city</span>
              <span> {currentTeamDetails?.location?.city || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>state</span>
              <span> {currentTeamDetails?.location?.state || "unknown"} </span>
            </div>
            <div className="field--info"></div>

            <div className="field--info">
              <span>zip</span>
              <span> {currentTeamDetails?.location?.zip || "unknown"} </span>
            </div>

            <div className="field--info">
              <span>country_code </span>
              <span>
                {currentTeamDetails?.location?.country_code || "unknown"}{" "}
              </span>
            </div>
            <div className="field--info">
              <span>timezone </span>
              <span>
                {" "}
                {currentTeamDetails?.location?.timezone || "unknown"}{" "}
              </span>
            </div>
            <div className="field--info">
              <span>latitude </span>
              <span>
                {" "}
                {currentTeamDetails?.location?.latitude || "unknown"}{" "}
              </span>
            </div>
            <div className="field--info">
              <span>longitude </span>
              <span>
                {currentTeamDetails?.location?.longitude || "unknown"}
              </span>
            </div>
            <div className="field--info">
              <span>elevation </span>
              <span>
                {currentTeamDetails?.location?.elevation || "unknown"}
              </span>
            </div>
            <div className="field--info">
              <span>capacity</span>
              <span>
                {" "}
                {currentTeamDetails?.location?.capacity || "unknown"}{" "}
              </span>
            </div>
            <div className="field--info">
              <span>year_constructed </span>
              <span>
                {currentTeamDetails?.location?.year_constructed || "unknown"}
              </span>
            </div>
            <div className="field--info">
              <span>grass </span>
              <span> {currentTeamDetails?.location?.grass || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>dome </span>
              <span> {currentTeamDetails?.location?.dome || "unknown"} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TeamDetails);
