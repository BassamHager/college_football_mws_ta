import React from "react";
import "./Pagination.css";

// components
import Button from "../shared/UI/button/Button";

const Pagination = ({ teamsPerPage, totalTeams, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTeams / teamsPerPage); i++)
    pageNumbers.push(i);

  return (
    <nav className="pagination--container">
      {pageNumbers.map((pageNum) => (
        <Button key={pageNum} className="" onClick={() => paginate(pageNum)}>
          {pageNum}
        </Button>
      ))}
    </nav>
  );
};

export default Pagination;
