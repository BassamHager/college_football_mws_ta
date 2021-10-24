import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
// import TeamDetails from "./pages/teamDetails/TeamDetailsPage";
import RedirectHome from "./pages/RedirectHome/RedirectHome";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/teamDetails" component={TeamDetails} /> */}
        <Route component={RedirectHome} />
      </Switch>
    </Router>
  </div>
);

export default App;
