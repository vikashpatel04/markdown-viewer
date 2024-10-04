import React from "react";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";

const MarkdownViewer = ({ markdownText }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black overflow-hidden">
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg font-medium"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="w-full h-full overflow-y-auto p-4 flex justify-center scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
        <div
          className="prose prose-xl text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: marked(markdownText) }}
        />
      </div>
    </div>
  );
};

export default MarkdownViewer;
