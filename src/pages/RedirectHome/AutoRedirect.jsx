import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const AutoRedirect = () => {
  // history
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, [history]);

  return "";
};

export default AutoRedirect;
