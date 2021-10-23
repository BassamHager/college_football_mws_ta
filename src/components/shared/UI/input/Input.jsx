import { useContext, useState } from "react";
import "./Input.css";

// context
import { AuthContext } from "../../../../context/auth/authContext";

const Input = ({ name, inputValues, setInputValues, checkPassword }) => {
  // restricted keys
  const [symbolsArr] = useState(["+", "-", "e", "E", "."]);

  // context
  const { setIsWrongPW } = useContext(AuthContext);

  // handle input change
  const handleChange = (e) => {
    try {
      // on reset input values
      if (inputValues.length === 0) {
        // reset alert style
        document.querySelectorAll(`input`).forEach((inp) => {
          inp.classList.remove("danger");
        });

        // reset alert status
        setIsWrongPW(false);
      }

      // destructure event
      const { value, name } = e?.target;

      // split input name to dynamically get the next input field & move focus to it
      const [input, inputNo] = name.split("-");
      const nextFieldNo = parseInt(inputNo) + 1;

      const nextField = document.querySelector(
        `input[name=${input}-${nextFieldNo}]`
      );

      nextField?.focus();

      // update input values
      const updatedValues = inputValues;
      updatedValues[inputNo - 1] = value;
      setInputValues(updatedValues);

      // check password only if none of the values !== undefined
      if (inputValues.length === 6 && !inputValues.includes(undefined)) {
        checkPassword();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // clear field to prevent having more than one digit as a value
  const clearField = (e) => {
    // restrict input
    symbolsArr.includes(e.key) && e.preventDefault();

    // get field
    const selectedField = document.querySelector(
      `input[name=${e.target.name}]`
    );

    // clear value
    selectedField.value = "";
  };

  return (
    <input
      type="number"
      min={0}
      max={9}
      maxLength={1}
      name={name}
      autoFocus={name === "input-1"}
      onKeyDown={(e) => clearField(e)} // add arrows functionality - todo
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Input;
