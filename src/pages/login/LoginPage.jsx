import { useEffect, useState } from "react";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";

// components
import Input from "../../components/shared/UI/input/Input";

// constants
import { LOGIN_PASSWORD } from "../../context/shared/constants";

const LoginPage = () => {
  // internal state
  const inputsNumbers = [1, 2, 3, 4, 5, 6];
  const [inputValues, setInputValues] = useState([]);
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);

  // history
  const history = useHistory();

  // helper function checks password & redirect to homepage
  const checkPassword = () => {
    try {
      if (inputValues.join("") === LOGIN_PASSWORD) setIsCorrectPassword(true);

      // else show danger alert
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isCorrectPassword && history.push("/");
  }, [isCorrectPassword, history]);

  return (
    <div className="background">
      <div className="login_container">
        <div className="container content_container">
          {/* logo */}
          <div className="logo_container">
            <div>
              <i className="far fa-futbol"></i> <h2>Log in your account</h2>
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
