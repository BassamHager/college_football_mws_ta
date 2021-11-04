import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import TeamDetails from "./pages/teamDetails/TeamDetailsPage";
import RedirectHome from "./pages/RedirectHome/AutoRedirect";
import Footer from "./components/footer/Footer";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/teamDetails/:id" component={TeamDetails} />
        <Route exact path="/searched/:name" component={HomePage} />
        <Route component={RedirectHome} />
      </Switch>
      {/* footer */}
      <Footer />
    </Router>
  </div>
);

export default App;
