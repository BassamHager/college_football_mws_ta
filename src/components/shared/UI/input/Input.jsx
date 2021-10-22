import { useState } from "react";

const Input = ({ name, inputValues, setInputValues, checkPassword }) => {
  // restricted keys
  const [symbolsArr] = useState(["+", "-", "e", "E", "."]);

  // handle input change
  const handleChange = (e) => {
    try {
      const { value, name } = e?.target;

      // split input name to dynamically get the next input field & move focus to it
      const [input, inputNo] = name.split("-");
      const nextFieldNo = parseInt(inputNo) + 1;

      const nextField = document.querySelector(
        `input[name=${input}-${nextFieldNo}]`
      );

      nextField?.focus();

      // update values
      const updatedValues = inputValues;
      updatedValues[inputNo - 1] = value;
      setInputValues(updatedValues);

      // check password if all values !== undefined
      if (!inputValues.includes(undefined)) checkPassword();
    } catch (error) {
      console.error(error);
    }
  };

  // clear field
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
      onKeyDown={(e) => clearField(e)} // add arrows functionality
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Input;
