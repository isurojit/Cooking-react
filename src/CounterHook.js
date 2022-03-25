import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

const CounterHook = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const buttonStyle = useContext(ThemeContext);
  const changeHandlerMinus = () => {
    setCounter(counter - 1);
  };

  const changeHandlerPlus = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button style={buttonStyle} onClick={changeHandlerMinus}>
        -
      </button>
      <span>{counter}</span>
      <button style={buttonStyle} onClick={changeHandlerPlus}>
        +
      </button>
    </div>
  );
};

export default CounterHook;
