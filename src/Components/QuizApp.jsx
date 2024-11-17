import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import QuizCard from "./QuizCard";
import results from "../constants";
import pageContext from "../PageContext.js";

const QuizApp = () => {
  //   const [questions, setQuestions] = useState([]);
  const { currentPage } = useContext(pageContext);
  //   useEffect(() => {
  //     const fetchQuestions = async () => {
  //       let ques = await fetch(
  //         `https://opentdb.com/api.php?amount=10&category=14&type=multiple`
  //       );
  //       ques = await ques.json();
  //       setQuestions(ques.results);
  //     };
  //     // fetchQuestions();
  //   }, []);

  const questions = results[currentPage];
  // const result = shuffle([
  //   questions?.correct_answer,
  //   ...questions?.incorrect_answers,
  // ]);
  // // const obj = useMemo(result, []);
  return (
    <>
      <div
        style={{ backgroundColor: "#212A3E", color: "black" }}
        className="min-h-screen min-w-[100vw]"
      >
        {/* <h1>Quiz App</h1> */}
        {/* {questions?.map((obj) => (
          <QuizCard key={obj.question} obj={obj} />
        ))} */}
        <QuizCard obj={questions} />
      </div>
    </>
  );
};

export default QuizApp;
