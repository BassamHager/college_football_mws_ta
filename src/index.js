import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// context
import { AuthState } from "./context/auth/authContext";
import { TeamsState } from "./context/teams/teamsContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <TeamsState>
        <App />
      </TeamsState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
