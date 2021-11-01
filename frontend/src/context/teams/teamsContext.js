import { createContext, useCallback, useReducer, useState } from "react";
// reducer
import teamsReducer from "./teamsReducer";
// types
import {
  GET_TEAMS,
  GET_TEAM_DETAILS,
  START_LOADING,
  SEARCH_TEAM,
} from "../shared/types";
// context
import { GET_TEAMS_URL } from "../../context/shared/constants";
// hooks
import { useHttpClient } from "../../util/httpHook";

export const TeamsContext = createContext();

export const TeamsState = ({ children }) => {
  // state
  const initialState = {
    teams: [], // filled by fetching api
    isLoading: false, // loading status
    teamDetails: {}, // details of clicked team card
    searchedTeams: [], // teams that search-input is included in their names
  };
  // state - displayed teams on homepage load
  const [loadedTeams, setLoadedTeams] = useState([]);
  // state - to clear input on clicking main title to go homepage
  const [isClearInput, setIsClearInput] = useState(false);

  // update state
  const [state, dispatch] = useReducer(teamsReducer, initialState);
  // destructure state
  const { teams, teamDetails, searchedTeams } = state;

  // hooks
  const { sendRequest } = useHttpClient();

  // fetch teams
  const getTeams = useCallback(async () => {
    try {
      dispatch({ type: START_LOADING });

      const teams = await sendRequest(GET_TEAMS_URL, "GET", null, {
        Authorization:
          "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
      });

      dispatch({ type: GET_TEAMS, payload: teams });

      // onload displayed teams
      setLoadedTeams(teams?.length > 9 ? teams?.slice(0, 10) : []);
    } catch (error) {
      console.error(error.message);
    }
  }, [sendRequest]);

  // get clicked team details
  const getTeamDetails = useCallback(
    (id) => {
      try {
        dispatch({ type: START_LOADING });

        // get team data by its id
        const clickedTeam = loadedTeams?.filter(
          (team) => team.id === Number(id)
        )[0];

        if (clickedTeam) {
          // save on local storage
          localStorage.setItem("teamDetails", JSON.stringify(clickedTeam));

          // update state
          dispatch({ type: GET_TEAM_DETAILS, payload: clickedTeam });
        }
        // end loading - todo
      } catch (error) {
        console.error(error.message);
      }
    },
    [loadedTeams]
  );

  // search team
  const searchTeam = useCallback(
    (input) => {
      try {
        dispatch({ type: START_LOADING });

        // get matching teams
        const matchingTeams = teams?.filter((team) =>
          team.school?.includes(input)
        );

        // save on local storage
        if (matchingTeams?.length > 0) {
          localStorage.setItem("searched", JSON.stringify(matchingTeams));

          // update state
          dispatch({ type: SEARCH_TEAM, payload: matchingTeams });
        } else throw new Error("No teams matched the input!");
      } catch (error) {
        console.error(error.message);
      }
    },
    [teams]
  );

  // clear searched teams
  const clearSearchedTeams = () => {
    try {
      // clear local storage
      localStorage.removeItem("searched");

      // clear state
      dispatch({ type: SEARCH_TEAM, payload: [] });

      // clear input
      setIsClearInput(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TeamsContext.Provider
      value={{
        // fetched teams
        getTeams,
        teams,

        // displayed teams
        setLoadedTeams,
        loadedTeams,

        // clicked team details
        getTeamDetails,
        teamDetails,

        // searched team
        searchTeam,
        clearSearchedTeams,
        searchedTeams,
        setIsClearInput,
        isClearInput,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
