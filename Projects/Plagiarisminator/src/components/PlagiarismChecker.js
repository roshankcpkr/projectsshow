import { useState } from "react";
import axios from "axios";

const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkPlagiarism = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/plagiarism", { text });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div class="p-8 h-screen">
          <div class="border border-gray-200 shadow-2xl rounded-tl-lg rounded-tr-lg bg-gray-100">
            <div class="py-2 px-2 bg-gray-200 rounded-tl-md rounded-tr-md flex items-center">
              <div class="rounded-full h-2 md:h-4 w-4  bg-red-400 flex mr-3"></div>
              <div class="rounded-full h-2 md:h-4 w-4 bg-yellow-400 flex mr-3"></div>
              <div class="rounded-full h-2 md:h-4 w-4 bg-green-400 flex mr-3"></div>
              <div class="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
                https://www.plagiarisminator.vercel.app
              </div>
            </div>
            <div class="px-2 py-4 bg-white min-h-[85vh] overflow-y-scroll">
              <div className="flex flex-col items-center justify-center py-2 bg-gradient-to-b">
                <textarea
                  className="w-full max-w-lg px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-md resize-none"
                  rows={8}
                  placeholder="Enter text to check for plagiarism..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button
                  className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                  onClick={checkPlagiarism}
                >
                  {loading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20c2.208 0 4-1.79 4-4h-4v4zm5.657-5.657l-2.647-3A7.95 7.95 0 0012 8V4c3.042 0 5.824 1.135 7.938 3l-2.647 3z"
                      ></path>
                    </svg>
                  ) : (
                    "Check Plagiarism"
                  )}
                </button>
                {result && (
                  <div className="bg-white p-4 rounded-md shadow opacity-90">
                    <h2 className="text-lg font-bold mb-2">
                      Plagiarism Results
                    </h2>
                    <p className="mb-4">
                      Percent Plagiarism: {result.percentPlagiarism}%
                    </p>
                    <ul>
                      {result.sources.map((source, index) => (
                        <li key={index} className="mb-2">
                          <p className="font-bold">{source.title}</p>
                          <p>{source.url}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlagiarismChecker;
