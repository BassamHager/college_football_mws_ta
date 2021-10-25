import { useCallback, useContext, useState } from "react";
import "./SearchBar.css";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
// components
import Button from "../../components/shared/UI/button/Button";

const SearchBar = () => {
  // internal state
  const [searchInput, setSearchInput] = useState("");

  // context
  const { searchTeam } = useContext(TeamsContext);

  // submit search
  const submitSearch = useCallback(
    (e) => {
      e.preventDefault();
      searchTeam(searchInput);
    },
    [searchTeam, searchInput]
  );

  return (
    <div className="container">
      <div className="SearchTeam--container">
        {/* search form  */}
        <form onSubmit={(e) => submitSearch(e)}>
          {/* search input */}
          <input
            type="text"
            placeholder="Search for a TEAM"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="search--input"
          />

          {/* submitting button */}
          <Button type="submit" className="button--search">
            {/* search icon */}
            <i className="fa fa-search " />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
