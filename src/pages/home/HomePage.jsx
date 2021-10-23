import { useCallback, useContext, useEffect, useState } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

// context
import { AuthContext } from "../../context/auth/authContext";
import { TeamsContext } from "../../context/teams/teamsContext";

// components
import Navbar from "../../components/navbar/Navbar";
import TeamsGrid from "../../components/teamsGrid/TeamsGrid";
import Pagination from "../../components/pagination/Pagination";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { isAuthorized } = useContext(AuthContext);
  const { getTeams, teams } = useContext(TeamsContext);

  // internal state
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 12;
  const lastIndexInPage = currentPage * teamsPerPage;
  const firstIndexInPage = lastIndexInPage - teamsPerPage;
  const currentTeamsDisplayed = teams.slice(firstIndexInPage, lastIndexInPage);

  // change page
  const paginate = useCallback((pageNumber) => setCurrentPage(pageNumber));

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
        <TeamsGrid displayedTeams={currentTeamsDisplayed} />

        {/* pagination */}
        <Pagination
          teamsPerPage={teamsPerPage}
          totalTeams={teams.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default HomePage;
