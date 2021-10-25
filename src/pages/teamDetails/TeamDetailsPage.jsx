import { useContext, useEffect } from "react";
import "./TeamDetailsPage.css";
import { withRouter, useHistory } from "react-router-dom";

// context
import { TeamsContext } from "../../context/teams/teamsContext";

// components
import Button from "../../components/shared/UI/button/Button";

const TeamDetails = ({ match }) => {
  // context
  const { getTeamDetails, teamDetails } = useContext(TeamsContext);

  // history
  const history = useHistory();

  // get team details using id in match params
  useEffect(() => {
    getTeamDetails(match.params.id);
  }, [getTeamDetails, match]);

  return (
    <div className="details--container">
      <div className="container">
        <div className="heading--bar">
          {/* title */}
          <h2 className="team--title">
            {teamDetails?.school || "unknown name"} -{" "}
            {teamDetails.abbreviation || "unknown abbreviation"}
          </h2>

          {/* go back button */}
          <Button className="button--back" onClick={() => history.push("/")}>
            Back <i class="fas fa-arrow-left"></i>
          </Button>
        </div>

        {/* container of two siblings */}
        <div className="flex--container">
          {/* logo img container */}
          <div className="logo--container">
            <img
              src={
                (teamDetails?.logos && teamDetails.logos[0]) ||
                "https://live.staticflickr.com/1878/44377254611_96d0b13955_b.jpg"
              }
              alt={teamDetails?.school}
            />
          </div>

          {/* written details container */}
          <div className="content--container">
            <div className="field--info">
              <span>mascot </span>
              <span> {teamDetails?.mascot || "unknown"} </span>
            </div>

            <div className="field--info">
              <span>conference </span>
              <span> {teamDetails?.conference || "unknown"} </span>
            </div>

            <div className="field--info">
              <span>division</span>
              <span> {teamDetails?.division || "unknown"} </span>
            </div>
            <div className="field--info color">
              <span>color </span>
              <span style={{ background: teamDetails?.color }}>
                {" "}
                {teamDetails?.color || "unknown"}
              </span>
            </div>
            <div className="field--info">
              <span>alt_color </span>
              <span style={{ background: teamDetails?.alt_color }}>
                {" "}
                {teamDetails?.alt_color || "unknown"}
              </span>
            </div>
            <div className="field--info">
              {/* location */}
              <span>venue_id</span>
              <span> {teamDetails?.location?.venue_id || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>name</span>
              <span> {teamDetails?.location?.name || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>city</span>
              <span> {teamDetails?.location?.city || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>state</span>
              <span> {teamDetails?.location?.state || "unknown"} </span>
            </div>
            <div className="field--info"></div>

            <div className="field--info">
              <span>zip</span>
              <span> {teamDetails?.location?.zip || "unknown"} </span>
            </div>

            <div className="field--info">
              <span>country_code </span>
              <span>{teamDetails?.location?.country_code || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>timezone </span>
              <span> {teamDetails?.location?.timezone || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>latitude </span>
              <span> {teamDetails?.location?.latitude || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>longitude </span>
              <span>{teamDetails?.location?.longitude || "unknown"}</span>
            </div>
            <div className="field--info">
              <span>elevation </span>
              <span>{teamDetails?.location?.elevation || "unknown"}</span>
            </div>
            <div className="field--info">
              <span>capacity</span>
              <span> {teamDetails?.location?.capacity || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>year_constructed </span>
              <span>
                {teamDetails?.location?.year_constructed || "unknown"}
              </span>
            </div>
            <div className="field--info">
              <span>grass </span>
              <span> {teamDetails?.location?.grass || "unknown"} </span>
            </div>
            <div className="field--info">
              <span>dome </span>
              <span> {teamDetails?.location?.dome || "unknown"} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TeamDetails);
