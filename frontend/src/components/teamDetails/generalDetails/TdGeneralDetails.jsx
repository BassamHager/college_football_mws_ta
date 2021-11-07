import "./TdGeneralDetails.css";

const TdGeneralDetails = ({ currentTeamDetails }) => (
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
    <div className="field--info">
      <span>color </span>
      <span
        style={{
          background: currentTeamDetails?.color,
          minWidth: "2rem",
          width: "10rem",
          display: "inline-block",
          height: "20px",
          border: "1px solid black",
          marginRight: "1rem",
        }}
      ></span>
      {currentTeamDetails?.color || "unknown"}
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
      <span> {currentTeamDetails?.location?.venue_id || "unknown"} </span>
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
      <span>{currentTeamDetails?.location?.country_code || "unknown"} </span>
    </div>
    <div className="field--info">
      <span>timezone </span>
      <span> {currentTeamDetails?.location?.timezone || "unknown"} </span>
    </div>
    <div className="field--info">
      <span>latitude </span>
      <span> {currentTeamDetails?.location?.latitude || "unknown"} </span>
    </div>
    <div className="field--info">
      <span>longitude </span>
      <span>{currentTeamDetails?.location?.longitude || "unknown"}</span>
    </div>
    <div className="field--info">
      <span>elevation </span>
      <span>{currentTeamDetails?.location?.elevation || "unknown"}</span>
    </div>
    <div className="field--info">
      <span>capacity</span>
      <span> {currentTeamDetails?.location?.capacity || "unknown"} </span>
    </div>
    <div className="field--info">
      <span>year_constructed </span>
      <span>{currentTeamDetails?.location?.year_constructed || "unknown"}</span>
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
);

export default TdGeneralDetails;
