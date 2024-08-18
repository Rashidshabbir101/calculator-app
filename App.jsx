import style from "./App.module.css";
import Display from "./component/Display";
import Container from "./component/Container";
import { useState, useEffect } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  const handleKeyDown = (event) => {
    const validKeys = "0123456789+-*/().%";
    if (validKeys.includes(event.key)) {
      setCalVal(calVal + event.key);
    } else if (event.key === "Enter") {
      onButtonClick("=");
    } else if (event.key === "Backspace") {
      setCalVal(calVal.slice(0, -1));
    } else if (event.key === "Escape") {
      onButtonClick("C");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [calVal]);

  return (
    <div className={style.calculator}>
      <Display displayValue={calVal} />
      <Container onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
