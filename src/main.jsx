import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { useState } from "react";
import pageContext from "./PageContext.js";
import scoreContext from "./ScoreContext.js";
function Root() {
  const [currentPage, setCurrentPage] = useState(1);
  const [score, setScore] = useState(0);
  return (
    <StrictMode>
      <scoreContext.Provider value={{ score, setScore }}>
        <pageContext.Provider value={{ currentPage, setCurrentPage }}>
          <App />
        </pageContext.Provider>
      </scoreContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
