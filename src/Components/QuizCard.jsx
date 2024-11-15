import React, { useEffect } from "react";
import he from "he";

const QuizCard = ({ obj }) => {
  const options = [obj.correct_answer, ...obj.incorrect_answers];
  const correctAnswer = obj.correct_answer;
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen min-w-[100%] text-xl ">
        <section className="bg-black border border-white text-white p-2 min-h-[50%] rounded-md">
          <section>
            <p className="text-[#0b192c]  bg-[#FFD369] max-w-[300px]">
              {obj.category}
            </p>
            <h1 id="question">{he.decode(obj.question)}</h1>
          </section>
          <section>
            {options.map((val) => (
              <p>{val}</p>
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default QuizCard;
