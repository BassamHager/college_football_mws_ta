import { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";

// components
import Input from "../../components/shared/UI/input/Input";
import Alert from "../../components/alert/Alert";

// constants
import { LOGIN_PASSWORD } from "../../context/shared/constants";

// context
import { AuthContext } from "../../context/auth/AuthContext";

const LoginPage = () => {
  // internal state
  const inputsNumbers = [1, 2, 3, 4, 5, 6];
  const [inputValues, setInputValues] = useState([]);

  // context
  const { isAuthorized, setIsAuthorized, isWrongPW, setIsWrongPW } =
    useContext(AuthContext);

  // history
  const history = useHistory();

  // helper function checks password & redirect to homepage
  const checkPassword = () => {
    try {
      // if correct: authorize
      if (inputValues.join("") === LOGIN_PASSWORD) {
        setIsAuthorized(true); // triggers useEffect
      }
      // else: display alert
      else {
        // update pw status
        setIsWrongPW(true);

        // get inputs, add danger class & reset value of each
        document.querySelectorAll(`input`).forEach((inp) => {
          inp.classList.add("danger");
          inp.value = "";
        });

        // reset inputValues state
        setInputValues([]);

        // reset focus to first input
        document.querySelector(`input[name=input-1]`).focus();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // watch isAuthorized to redirect to homepage when it's true
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

            {/* error */}
            {isWrongPW && <Alert />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
