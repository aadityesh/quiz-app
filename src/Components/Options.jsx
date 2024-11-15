import React, { useEffect, useState } from "react";
import he from "he";

function OptionComponent({ value, variant, onClick }) {
  const variants = {
    default: {
      backgroundColor: "white",
    },
    correct: {
      backgroundColor: "green",
      color: "white",
      fontWeight: 500,
    },
    wrong: {
      backgroundColor: "red",
      color: "white",
      fontWeight: 500,
    },
  };

  return (
    <>
      <p
        onClick={onClick}
        style={variants[variant]}
        className={`hover:bg-slate-100  min-w-[100%] p-2 rounded-md cursor-pointer`}
      >
        {he.decode(value)}
      </p>
    </>
  );
}

function Options({ value, correctAnswer }) {
  const [tick, setTick] = useState(false);
  const handleTick = () => {
    setTick(true);
  };

  useEffect(() => {
    setTick(false);
  }, [value]);

  return (
    <>
      {!tick ? (
        <OptionComponent
          value={value}
          variant={"default"}
          onClick={handleTick}
        />
      ) : tick && correctAnswer == value ? (
        <OptionComponent
          value={value}
          variant={"correct"}
          onClick={handleTick}
        />
      ) : (
        <OptionComponent value={value} variant={"wrong"} onClick={handleTick} />
      )}
    </>
  );
}

export default Options;
