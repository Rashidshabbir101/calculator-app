import style from "./Container.module.css";

const Container = ({ onButtonClick }) => {
  const buttonNames = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
    "(",
    ")",
    "%",
  ];

  return (
    <div className={style.ButtonContainer}>
      {buttonNames.map((button) => (
        <button
          key={button}
          className={style.Button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Container;
