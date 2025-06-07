import React from "react";
import { useState, useEffect } from "react";
import { McqChallenge } from "../challenge/McqChallenge";

export function HistoryPanel() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <p className="text-gray-600 text-center">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <p>Error: {error}</p>
          <button
            onClick={fetchHistory}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        History
      </h2>
      {history.length === 0 ? (
        <p className="text-gray-600 text-center">No challenges found.</p>
      ) : (
        <div className="space-y-4">
          {history.map((challenge) => (
            <McqChallenge
              challenge={challenge}
              key={challenge.id}
              showExplanation
            />
          ))}
        </div>
      )}
    </div>
  );
}