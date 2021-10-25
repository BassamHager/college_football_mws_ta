import { useCallback, useContext, useState } from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

// context
import { TeamsContext } from "../../context/teams/teamsContext";

const Pagination = () => {
  // context
  const { teams, setDisplayedTeams } = useContext(TeamsContext);

  // pagination state
  const teamsPerPage = 10;
  const pageCount = Math.ceil(teams?.length / teamsPerPage);
  const [clickedPageNum, setClickedPageNum] = useState(0);
  const firstIndexInPage = teamsPerPage * clickedPageNum;
  const lastIndexInPage = firstIndexInPage + teamsPerPage;

  // change page
  const paginate = useCallback(
    (e) => {
      // update clicked page num
      setClickedPageNum(e.selected + 1);
      console.log(e.selected + 1);

      // update displayed teams
      setDisplayedTeams(teams.slice(firstIndexInPage, lastIndexInPage));
    },
    [
      setClickedPageNum,
      setDisplayedTeams,
      teams,
      firstIndexInPage,
      lastIndexInPage,
    ]
  );

  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={3}
      // change page
      onPageChange={(e) => paginate(e)}
      // buttons text
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      // style
      containerClassName={"pagination--container"}
      previousClassName={"button--container"}
      previousLinkClassName={"page--button "}
      nextClassName={"button--container"}
      nextLinkClassName={"page--button"}
      pageClassName={"button--container"}
      pageLinkClassName={"page--button "}
      breakClassName={"button--container"}
      breakLinkClassName={"page--button"}
      activeClassName={"selected "}
    />
  );
};

export default Pagination;
