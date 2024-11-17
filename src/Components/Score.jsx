import React, { useContext } from "react";
import scoreContext from "../ScoreContext.js";
function Score() {
  const { score } = useContext(scoreContext);
  return (
    <>
      <section
        className="min-w-[25%] border-[3px] border-white rounded-md p-2 font-xl font-medium
      flex justify-between items-center bg-white text-black"
      >
        <p>Score</p>
        <p>{score}</p>
      </section>
    </>
  );
}

export default Score;
