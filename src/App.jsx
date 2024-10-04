import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MarkdownViewer from "./components/MarkdownViewer";

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <div className="absolute top-4 right-4">
          <button
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
            onClick={toggleTheme}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home markdownText={markdownText} setMarkdownText={setMarkdownText} />} />
          <Route path="/viewer" element={<MarkdownViewer markdownText={markdownText} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
