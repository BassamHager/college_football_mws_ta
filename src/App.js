import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";

const App = () => {
  // const password = process.env.REACT_APP_LOGIN_PASSWORD;
  const [isCorrectPassword /*, setIsCorrectPassword*/] = useState(false);

  let routes; // assign routes according to login validation
  if (isCorrectPassword) {
    routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
