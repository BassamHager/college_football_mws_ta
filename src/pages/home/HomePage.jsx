import { useContext, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

// context
import { AuthContext } from "../../context/auth/AuthContext";

const HomePage = () => {
  // history
  const history = useHistory();

  // context
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  // force redirect to login page
  useEffect(() => {
    !isAuthorized && history.push("/login");
  }, [isAuthorized, history]);

  return (
    <div className="home">
      <button onClick={() => setIsAuthorized(false)} className="btn_logout">
        Logout <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};

export default HomePage;
