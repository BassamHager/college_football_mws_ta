import { createContext, useCallback, useReducer, useState } from "react";
// reducer
import teamsReducer from "./teamsReducer";
// types
import { GET_TEAMS, GET_TEAM_DETAILS, START_LOADING } from "../shared/types";
// context
// import { GET_TEAMS_URL } from "../../context/shared/constants";
import mocked from "../mock/mockData.json"; // mock data
// hooks
// import { useHttpClient } from "../../util/httpHook";

export const TeamsContext = createContext();

export const TeamsState = ({ children }) => {
  // fetched teams state
  const initialState = {
    teams: [], // filled by fetching api
    isLoading: false, // loading status
    teamDetails: {}, // details of clicked team card
  };

  // displayed teams state
  const [displayedTeams, setDisplayedTeams] = useState([]);

  // update state
  const [state, dispatch] = useReducer(teamsReducer, initialState);

  // hooks
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // fetch teams
  const getTeams = useCallback(async () => {
    try {
      // update loading
      dispatch({ type: START_LOADING });

      // mocked data
      const teams = mocked;
      // const teams = await sendRequest(GET_TEAMS_URL, "GET", null, {
      //   "Access-Control-Allow-Origin": "*",
      //   accept: "application/json",
      //   "Content-Type": "application/json",
      //   Authorization:
      //     "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
      // });

      // update state
      dispatch({ type: GET_TEAMS, payload: teams });

      // initialize teams displayed
      setDisplayedTeams(teams?.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  }, []);

  // destructure state
  const { teams, teamDetails } = state;

  // get clicked team details
  const getTeamDetails = useCallback(
    (id) => {
      try {
        // update loading
        dispatch({ type: START_LOADING });

        const clickedTeam = displayedTeams.filter(
          (team) => team.id === Number(id)
        )[0];
        if (clickedTeam) {
          dispatch({ type: GET_TEAM_DETAILS, payload: clickedTeam });
        } else throw new Error("Clicked team details not found!");
      } catch (error) {
        console.error(error);
      }
    },
    [displayedTeams]
  );

  return (
    <TeamsContext.Provider
      value={{
        // fetched teams
        getTeams,
        teams,

        // displayed teams
        setDisplayedTeams,
        displayedTeams,

        // clicked team details
        getTeamDetails,
        teamDetails,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
