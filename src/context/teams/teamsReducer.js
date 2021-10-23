// types
import { GET_TEAMS, START_LOADING } from "../shared/types";

const teamsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case GET_TEAMS:
      return { ...state, teams: payload, isLoading: false };

    default:
      return state;
  }
};

export default teamsReducer;
