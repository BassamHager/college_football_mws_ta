import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// components
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import TeamsGrid from "../../components/teamsGrid/TeamsGrid";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
import "./HomePage.css";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { getTeams } = useContext(TeamsContext);

  // redirect to login page if not authorized
  useEffect(
    () =>
      localStorage.getItem("isAuthorized")
        ? getTeams()
        : history.push("/login"),
    [history, getTeams]
  );

  return (
    <div className="home">
      <div className="container">
        {/* loading... todo */}

        {/* nav bar */}
        <Navbar />

        {/* teams grid */}
        <TeamsGrid />

        {/* pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage;
