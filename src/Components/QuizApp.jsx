import React, { memo, useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import results from "../constants";
import Pagination from "./Pagination";

const QuizApp = () => {
  //   const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPageNumber] = useState(1);

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

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPageNumber((e) => e + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPageNumber((e) => e - 1);
    }
  };
  const questions = results[currentPage];
  return (
    <>
      <div
        style={{ backgroundColor: "#0b192c", color: "white" }}
        className="min-h-screen min-w-[100vw]"
      >
        {/* <h1>Quiz App</h1> */}
        {/* {questions?.map((obj) => (
          <QuizCard key={obj.question} obj={obj} />
        ))} */}
        <section>
          <QuizCard obj={questions} />
          <Pagination
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </section>
      </div>
    </>
  );
};

export default QuizApp;
