import "./Pagination.css";
// components
import Button from "../shared/UI/button/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import { TeamsContext } from "../../context/teams/teamsContext";

const Pagination = () => {
  // context
  const { teams, setLoadedTeams } = useContext(TeamsContext);

  // internal state
  const teamsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexInPage = currentPage * teamsPerPage;
  const firstIndexInPage = lastIndexInPage - teamsPerPage;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(teams?.length / teamsPerPage); i++)
    pageNumbers.push(i);

  // change page
  const paginate = useCallback(
    (pageNumber) => {
      setCurrentPage(pageNumber);
    },
    [setCurrentPage]
  );

  useEffect(
    () => setLoadedTeams(teams.slice(firstIndexInPage, lastIndexInPage)),
    [teams, firstIndexInPage, lastIndexInPage, setLoadedTeams]
  );

  return (
    <nav className="pagination--container">
      {pageNumbers.map((pageNum) => (
        <Button key={pageNum} onClick={() => paginate(pageNum)}>
          {pageNum}
        </Button>
      ))}
    </nav>
  );
};

export default Pagination;
