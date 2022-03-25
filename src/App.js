import React, { useState } from "react";
import "./App.css";
import CounterHook from "./CounterHook";

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("red");

  const value = {
    backgroundColor: theme,
  };

  const buttonBgChageHnadler = () => {
    setTheme((prevTheme) => {
      return prevTheme === "red" ? "blue" : "red";
    });
  };

  return (
    <ThemeContext.Provider value={value}>
      <CounterHook initialValue={0} />
      <button onClick={buttonBgChageHnadler}>Toggle Bg Color</button>
    </ThemeContext.Provider>
  );
};
export default App;
