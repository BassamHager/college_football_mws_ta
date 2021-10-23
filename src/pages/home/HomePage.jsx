import { useCallback, useContext, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

// context
import { AuthContext } from "../../context/auth/AuthContext";
// import { GET_TEAMS_URL } from "../../context/shared/constants";
import mocked from "../../context/mock/mockData.json";

// hooks
import { useHttpClient } from "../../util/httpHook";

// components
import Button from "../../components/shared/UI/button/Button";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  // hooks
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // fetch teams
  const fetchTeams = useCallback(async () => {
    // const teams = await sendRequest(GET_TEAMS_URL, "GET", null, {
    //   "Access-Control-Allow-Origin": "*",
    //   accept: "application/json",
    //   Authorization:
    //     "Bearer S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS",
    // });
    const teams = mocked;
    console.log(teams);
  }, []);

  // fetchTeams();
  // force redirect to login page
  useEffect(() => {
    !isAuthorized ? history.push("/login") : fetchTeams();
  }, [isAuthorized, history, fetchTeams]);

  return (
    <div className="home">
      <Button className="button--logout" onClick={() => setIsAuthorized(false)}>
        Logout <i className="fas fa-sign-out-alt"></i>
      </Button>
    </div>
  );
};

export default HomePage;
