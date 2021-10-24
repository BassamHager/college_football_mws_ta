import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// components
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import TeamsGrid from "../../components/teamsGrid/TeamsGrid";
// context
import { AuthContext } from "../../context/auth/authContext";
import { TeamsContext } from "../../context/teams/teamsContext";
import "./HomePage.css";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { isAuthorized } = useContext(AuthContext);
  const { getTeams } = useContext(TeamsContext);

  // force redirect to login page
  useEffect(() => {
    !isAuthorized ? history.push("/login") : getTeams();
  }, [isAuthorized, history, getTeams]);

  return (
    <div className="home">
      <div className="container">
        {/* loading... */}

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
