import React, { memo, useContext, useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import results from "../constants";
import Pagination from "./Pagination";
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
