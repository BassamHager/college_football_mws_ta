import { createContext, useCallback, useReducer, useState } from "react";
// types
import {
  GET_TEAMS,
  GET_TEAM_DETAILS,
  START_LOADING,
  SEARCH_TEAM,
} from "../shared/types";
// reducer
import teamsReducer from "./teamsReducer";
// context
import { GET_TEAMS_URL } from "../../context/shared/constants";
// hooks
import { useHttpClient } from "../../util/httpHook";

export const TeamsContext = createContext();

export const TeamsState = ({ children }) => {
  // state
  const initialState = {
    teams: [], // filled onload by fetching api
    isLoading: false, // loading status
    teamDetails: {}, // details of clicked team card
    searchedTeams: [], // teams that search-input is included in their names
  };
  const [state, dispatch] = useReducer(teamsReducer, initialState);
  const { teams, teamDetails, searchedTeams } = state;

  // state - displayed teams on homepage load
  const [loadedTeams, setLoadedTeams] = useState([]);
  // state - to clear input on clicking main title to go homepage
  const [isClearInput, setIsClearInput] = useState(false);
  // state - upcoming games
  const [upcomingGames, setUpcomingGames] = useState([]);
  // state - previous games
  const [previousGames, setPreviousGames] = useState([]);
  // state - previous games
  const [gameStats, setGameStats] = useState({});

  // hooks
  const { sendRequest, isLoading } = useHttpClient();

  // fetch teams
  const getTeams = useCallback(async () => {
    try {
      const teams = await sendRequest(GET_TEAMS_URL, "GET", null, {
        Authorization:
          "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
      });

      // save on local storage
      localStorage.setItem("fetchedTeams", JSON.stringify(teams));

      // update state
      dispatch({ type: GET_TEAMS, payload: teams });
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
        const clickedTeam = teams?.filter((team) => team.id === Number(id))[0];

        if (clickedTeam) {
          // save on local storage
          localStorage.setItem("teamDetails", JSON.stringify(clickedTeam));

          // update state
          dispatch({ type: GET_TEAM_DETAILS, payload: clickedTeam });
        } else throw new Error("Clicked team details not found!");
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
        // get matching teams
        const matchingTeams = teams?.filter((team) =>
          team.school?.toLowerCase().includes(input.toLowerCase())
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

  // get team calendar
  const getTeamCalender = useCallback(
    async (teamName) => {
      try {
        const calendarData = await sendRequest(
          `http://localhost:4000/teams/${teamName}/calendar`,
          "GET",
          null,
          {
            Authorization:
              "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
          }
        );

        return calendarData;
      } catch (error) {
        console.error("ERROR: ", error.message);
      }
    },
    [sendRequest]
  );

  // get team upcoming games
  const getUpcomingGames = useCallback(
    async (teamName) => {
      try {
        const calendarData = await getTeamCalender(teamName);

        const currentTime = new Date();
        const upcomingGames = calendarData.filter(
          (game) => new Date(game.startTime) >= currentTime
        );

        // // save on local storage
        localStorage.setItem("upcomingGames", JSON.stringify(upcomingGames));

        // // update state
        setUpcomingGames(upcomingGames);
      } catch (error) {
        console.error("ERROR: ", error.message);
      }
    },
    [getTeamCalender]
  );

  // get previous games
  const getPreviousGames = useCallback(
    async (teamName) => {
      try {
        const calendarData = await getTeamCalender(teamName);

        const currentTime = new Date();
        const previousGames = calendarData.filter(
          (game) => new Date(game.startTime) <= currentTime
        );

        // // save on local storage
        localStorage.setItem("previousGames", JSON.stringify(previousGames));

        // // update state
        setPreviousGames(previousGames);
      } catch (error) {
        console.error("ERROR: ", error.message);
      }
    },
    [getTeamCalender]
  );

  // get game details
  const getGameStats = useCallback(
    async (year, teamName, id) => {
      try {
        const teamGamesData = await sendRequest(
          `http://localhost:4000/teams/${teamName}/gamestats/${year}`,
          "GET",
          null,
          {
            Authorization:
              "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
          }
        );

        // get clicked game stats
        const gameStats =
          teamGamesData &&
          teamGamesData.filter((game) => Number(game.id) === id)[0];

        // save on local storage
        localStorage.setItem("gameStats", JSON.stringify(gameStats));

        // update state
        setGameStats(gameStats);
      } catch (error) {
        console.error("ERROR: ", error.message);
      }
    },
    [sendRequest]
  );

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

        // team upcoming games
        getUpcomingGames,
        setUpcomingGames,
        upcomingGames,

        // team previous games
        getPreviousGames,
        setPreviousGames,
        previousGames,

        // game stats
        getGameStats,
        setGameStats,
        gameStats,

        // loading status
        isLoading,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
