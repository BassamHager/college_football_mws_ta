import { useCallback, useContext, useEffect, useState } from "react";
import "./SearchBar.css";
import { useHistory } from "react-router-dom";
// context
import { TeamsContext } from "../../context/teams/teamsContext";
// components
import Button from "../../components/shared/UI/button/Button";

const SearchBar = () => {
  // internal state
  const [searchInput, setSearchInput] = useState("");

  // context
  const { searchTeam, isClearInput, setIsClearInput } =
    useContext(TeamsContext);

  // history
  const history = useHistory();

  // submit search
  const submitSearch = useCallback(
    (e) => {
      try {
        e.preventDefault();
        // clear local storage
        localStorage.removeItem("searched");

        // validate input
        if (searchInput === "")
          // todo display
          throw new Error("Empty input, please enter a team name");
        else searchTeam(searchInput);

        // redirect to /searched & update homepage team cards
        const teams = localStorage.getItem("searched");
        if (teams?.length > 0) history.push(`/searched/${searchInput}`);
      } catch (error) {
        console.error(error.message);
      }
    },
    [searchTeam, searchInput, history]
  );

  // clear input & reset the clearing boolean to false
  const clearInput = useCallback(() => {
    setSearchInput("");
    setIsClearInput(false);
  }, [setIsClearInput]);

  // watch clearing boolean
  useEffect(() => {
    isClearInput && clearInput();
  }, [isClearInput, clearInput]);

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
