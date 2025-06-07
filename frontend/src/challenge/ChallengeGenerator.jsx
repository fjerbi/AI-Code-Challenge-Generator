import React from "react";
import { useState, useEffect } from "react";
import { McqChallenge } from "./McqChallenge";

export function ChallengeGenerator() {
  const [challenge, setChallenge] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [quota, setQuota] = useState(null);

  const fetchQuota = async () => {};
  const generateChallenge = async () => {};
  const getNextResetTime = () => {};

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Coding Challenge Generator
      </h2>
      <div className="mb-4">
        <p className="text-gray-600">
          You have {quota?.quota_remaining || 0} tokens remaining.
        </p>
        {quota?.quota_remaining === 0 && (
          <p className="text-red-500 mt-2">
            You have reached your quota limit. Please wait until the next reset
            time: {0}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="difficulty"
          className="block text-gray-700 font-medium mb-2"
        >
          Select Difficulty
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          disabled={isLoading}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button
        onClick={generateChallenge}
        disabled={isLoading || quota?.quota_remaining === 0}
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Loading..." : "Generate Challenge"}
      </button>
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          <p>{error}</p>
        </div>
      )}
      {challenge && <McqChallenge challenge={challenge} />}
    </div>
  );
}