import { useState, useCallback } from "react";
import "./SearchBar.css";

// components
import Button from "../../components/shared/UI/button/Button";

const SearchBar = () => {
  // inner state
  const [searchInput, setSearchInput] = useState("");

  // submit search
  const submitSearch = useCallback(
    (e) => {
      e.preventDefault();
      console.log(searchInput);
    },
    [searchInput]
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
