import React, { useEffect, useState } from "react";
import he from "he";
import Pagination from "./Pagination";
import Options from "./Options";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const QuizCard = ({ obj }) => {
  const options = shuffle([obj?.correct_answer, ...obj?.incorrect_answers]);
  const correctAnswer = obj?.correct_answer;

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen min-w-[100%] text-xl ">
        <section className="text-[#0b192c]  bg-[#FFD369] min-w-[50%]  min-h-[75%] p-[32px] rounded-md flex flex-col  ">
          {/* <p>{obj.category}</p> */}
          <h1 className="rounded-md bg-white max-w-[100%] p-2">
            {"Q. " + he.decode(obj?.question)}
          </h1>
          <section className="flex flex-col gap-3 pt-[20px]">
            {options?.map((value) => (
              <Options value={value} correctAnswer={correctAnswer} />
            ))}
          </section>
        </section>
        <Pagination />
      </div>
    </>
  );
};

export default QuizCard;
