import React from "react";
import { Link } from "react-router-dom";
import "./TeamCard.css";

const TeamCard = ({ id, school, logo }) => (
  <Link to={`/teamDetails/${id}`} className="card">
    <h3> {school || "unknown"} </h3>
    <img src={logo} alt={school} />
  </Link>
);

export default TeamCard;
