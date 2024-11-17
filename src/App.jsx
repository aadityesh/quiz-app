import { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import QuizApp from "./Components/QuizApp";
import pageContext from "./PageContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<QuizApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
