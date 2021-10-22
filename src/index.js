import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// context
import { AuthState } from "./context/auth/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);