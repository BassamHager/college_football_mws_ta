import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// context
import { AppState } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>,
  document.getElementById("root")
);
