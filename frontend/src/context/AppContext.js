import { createContext, useCallback } from "react";
import { AuthState } from "./auth/authContext";
import { TeamsState } from "./teams/teamsContext";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  // combine provider
  const combinedContexts = useCallback(
    (providers, components) =>
      providers?.reduce((AccProvider, CurProvider) => (
        <AccProvider>
          <CurProvider> {components} </CurProvider>
        </AccProvider>
      )),
    []
  );

  return combinedContexts([AuthState, TeamsState], children);
};
