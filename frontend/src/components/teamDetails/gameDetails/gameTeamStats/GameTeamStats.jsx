import "./GameTeamStats.css";
// components
import GtsCategory from "./gtsCategory/GtsCategory";

const GameTeamStats = ({ team }) => (
  <div className="gts--container">
    <h4>
      <span>team</span>
      {team?.school}
    </h4>
    <h4>
      <span>homeAway</span>
      {team?.homeAway}
    </h4>
    <h4>
      <span>points</span>
      {team?.points}
    </h4>
    <h4>
      <span>conference</span>
      {team?.conference}
    </h4>

    <div className="stats">
      <h4>
        <span>game stats</span>
        <hr />
      </h4>
      {team?.stats?.map((stat, i) => (
        <GtsCategory key={stat?.category + i} stat={stat} />
      ))}
    </div>
  </div>
);

export default GameTeamStats;
