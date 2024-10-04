import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ markdownText, setMarkdownText }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl mb-4 font-semibold">Markdown Viewer</h1>
        <textarea
          className="w-3/4 h-96 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-xl font-medium bg-white dark:bg-gray-800 dark:text-gray-200"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          placeholder="Enter your markdown here..."
        />
        <button
          className="mt-4 px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white rounded-lg text-lg"
          onClick={() => navigate("/viewer")}
        >
          Proceed
        </button>
      </div>
      <div className="text-center mb-4">
        <p className="text-lg">
          Know about the author:{" "}
          <a
            href="https://www.vikash-patel.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 hover:underline"
          >
            vikash-patel.tech
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
