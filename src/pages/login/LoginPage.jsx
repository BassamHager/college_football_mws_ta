import { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";

// components
import Input from "../../components/shared/UI/input/Input";

// constants
import { LOGIN_PASSWORD } from "../../context/shared/constants";

// context
import { AuthContext } from "../../context/auth/AuthContext";

const LoginPage = () => {
  // internal state
  const inputsNumbers = [1, 2, 3, 4, 5, 6];
  const [inputValues, setInputValues] = useState([]);

  // context
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  // history
  const history = useHistory();

  // helper function checks password & redirect to homepage
  const checkPassword = () => {
    try {
      if (inputValues.join("") === LOGIN_PASSWORD) setIsAuthorized(true);

      // else show danger alert
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isAuthorized && history.push("/");
  }, [isAuthorized, history]);

  return (
    <div className="background">
      <div className="login_container">
        <div className="container content_container">
          {/* logo */}
          <div className="logo_container">
            <div>
              <i className="far fa-futbol"></i>
              <h2>College Football</h2>
              <p>Log into your account</p>
            </div>
          </div>

          {/* codeInput container */}
          <div className="codeInput_container">
            <h2>Enter your password to login</h2>
            {/* digits inputs */}
            <div className="codeInput_parent">
              {inputsNumbers.map((num) => (
                <Input
                  key={num}
                  name={`input-${num}`}
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                  checkPassword={checkPassword}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
