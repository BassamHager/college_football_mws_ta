import { createContext, useCallback, useReducer } from "react";

// reducer
import teamsReducer from "./teamsReducer";

// types
import { GET_TEAMS, START_LOADING } from "../shared/types";

// context
// import { GET_TEAMS_URL } from "../../context/shared/constants";
import mocked from "../mock/mockData.json"; // mock data

// hooks
// import { useHttpClient } from "../../util/httpHook";

export const TeamsContext = createContext();

export const TeamsState = ({ children }) => {
  // state
  const initialState = {
    teams: [], // filled by fetching api
    isLoading: false, // loading status
  };

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

      // update state
      dispatch({ type: GET_TEAMS, payload: teams });
      console.log(teams);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // destructure state
  const { teams } = state;

  return (
    <TeamsContext.Provider
      value={{
        // teams
        getTeams, // fetch teams
        teams, // fetched teams
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

/*
const teams = await sendRequest(GET_TEAMS_URL, "GET", null, {
     "Access-Control-Allow-Origin": "*",
     accept: "application/json",
     Authorization:
       "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
   });
  */
