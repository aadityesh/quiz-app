import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { useState } from "react";
import pageContext from "./PageContext.js";
function Root() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <StrictMode>
      <pageContext.Provider value={{ currentPage, setCurrentPage }}>
        <App />
      </pageContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
