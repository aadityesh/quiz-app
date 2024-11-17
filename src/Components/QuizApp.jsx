import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import QuizCard from "./QuizCard";
import pageContext from "../PageContext.js";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const { currentPage } = useContext(pageContext);

  /*useEffect(() => {
    async function fetchQuestions() {
      if (localStorage.getItem("data") != null) {
        setQuestions(JSON.parse(localStorage.getItem("data")));
      } else {
        try {
          const response = await fetch(
            `https://opentdb.com/api.php?amount=10&category=14&type=multiple`
          );
          const parsedResponse = await response.json();
          // localStorage.setItem("data", JSON.stringify(parsedResponse.results));
          console.log(parsedResponse.results);
          setQuestions(parsedResponse.results);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    }
    fetchQuestions();
  }, []);*/

  useEffect(() => {
    async function fetchQuestions() {
      let questionsFromStorage;
      try {
        // Attempt to parse localStorage data, handle potential errors
        questionsFromStorage = JSON.parse(localStorage.getItem("data"));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        // Set questionsFromStorage to null if parse fails
        questionsFromStorage = null;
      }

      if (questionsFromStorage) {
        setQuestions(questionsFromStorage);
      } else {
        try {
          const response = await fetch(
            "https://opentdb.com/api.php?amount=10&category=14&type=multiple"
          );
          const parsedResponse = await response.json();
          localStorage.setItem("data", JSON.stringify(parsedResponse.results));
          console.log(parsedResponse.results);
          setQuestions(parsedResponse.results);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    }

    fetchQuestions();
  }, []);

  const question = questions[currentPage - 1];
  console.log(questions);
  console.log(typeof currentPage);

  return (
    <>
      {questions.length > 0 && (
        <>
          <div
            style={{ backgroundColor: "#212A3E", color: "black" }}
            className="min-h-screen min-w-[100vw]"
          >
            <QuizCard obj={question} />
            {/* <p className="text-4xl">{currentPage}</p> */}
          </div>
        </>
      )}
    </>
  );
};

export default QuizApp;
