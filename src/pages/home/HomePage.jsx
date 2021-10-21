import { useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  // history
  const history = useHistory();

  // force redirect to login page
  useEffect(() => {
    history.push("/login");
  }, []); // eslint-disable-line

  return <div className="home">Home</div>;
};

export default HomePage;
