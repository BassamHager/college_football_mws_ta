import "./TdLogoAndBtns.css";

const TdLogoAndBtns = ({ currentTeamDetails }) => {
  return (
    <div className="logo--container">
      <div className="details--buttons">
        <button>previous games</button>
        <button onClick={() => console.log("clicked")}>upcoming games</button>
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
  );
};

export default TdLogoAndBtns;
