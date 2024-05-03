'use client'

import React, { useState } from 'react';

const JeeMainPredictor = () => {
  const [score, setScore] = useState('');
  const [percentile, setPercentile] = useState('');
  const [rank, setRank] = useState('');
  const [showResult, setShowResult] = useState(false);

  const predict = () => {
    const scoreFloat = parseFloat(score);
    if (isNaN(scoreFloat) || scoreFloat < 0 || scoreFloat > 300) {
      alert('Please enter a valid score between 0 and 300.');
      return;
    }

    if (scoreFloat >= 281) {
      setPercentile('100 - 99.99989145');
      setRank('1 - 20');
    } else if (scoreFloat >= 271) {
      setPercentile('99.994681 - 99.997394');
      setRank('80 - 24');
    } else if (scoreFloat >= 263) {
      setPercentile('99.990990 - 99.994029');
      setRank('83 - 55');
    } else if (scoreFloat >= 250) {
      setPercentile('99.977205 - 99.988819');
      setRank('210 - 85');
    } else if (scoreFloat >= 241) {
      setPercentile('99.960163 - 99.975034');
      setRank('367 - 215');
    } else if (scoreFloat >= 231) {
      setPercentile('99.934980 - 99.956364');
      setRank('599 - 375');
    } else if (scoreFloat >= 221) {
      setPercentile('99.901113 - 99.928901');
      setRank('911 - 610');
    } else if (scoreFloat >= 211) {
      setPercentile('99.851616 - 99.893732');
      setRank('1367 - 920');
    } else if (scoreFloat >= 201) {
      setPercentile('99.795063 - 99.845212');
      setRank('1888 - 1375');
    } else if (scoreFloat >= 191) {
      setPercentile('99.710831 - 99.782472');
      setRank('2664 - 1900');
    } else if (scoreFloat >= 181) {
      setPercentile('99.597399 - 99.688579');
      setRank('3710 - 2700');
    } else if (scoreFloat >= 171) {
      setPercentile('99.456939 - 99.573193');
      setRank('5003 - 3800');
    } else if (scoreFloat >= 161) {
      setPercentile('99.272084 - 99.431214');
      setRank('6706 - 5100');
    } else if (scoreFloat >= 151) {
      setPercentile('99.028614 - 99.239737');
      setRank('8949 - 6800');
    } else if (scoreFloat >= 141) {
      setPercentile('98.732389 - 98.990296');
      setRank('11678 - 9000');
    } else if (scoreFloat >= 131) {
      setPercentile('98.317414 - 98.666935');
      setRank('15501 - 11800');
    } else if (scoreFloat >= 121) {
      setPercentile('97.811260 - 98.254132');
      setRank('20164 - 15700');
    } else if (scoreFloat >= 111) {
      setPercentile('97.142937 - 97.685672');
      setRank('26321 - 20500');
    } else if (scoreFloat >= 101) {
      setPercentile('96.204550 - 96.978272');
      setRank('34966 - 26500');
    } else if (scoreFloat >= 91) {
      setPercentile('94.998594 - 96.064850');
      setRank('46076 - 35000');
    } else if (scoreFloat >= 81) {
      setPercentile('93.471231 - 94.749479');
      setRank('60147 - 46500');
    } else if (scoreFloat >= 71) {
      setPercentile('91.072128 - 93.152971');
      setRank('82249 - 61000');
    } else if (scoreFloat >= 61) {
      setPercentile('87.512225 - 90.702200');
      setRank('115045 - 83000');
    } else if (scoreFloat >= 51) {
      setPercentile('82.016062 - 86.907944');
      setRank('165679 - 117000');
    } else if (scoreFloat >= 41) {
      setPercentile('73.287808 - 80.982153');
      setRank('246089 - 166000');
    } else if (scoreFloat >= 31) {
      setPercentile('58.151490 - 71.302052');
      setRank('385534 - 264383');
    } else {
      setPercentile('13.495849 - 33.229128');
      setRank('Unknown');
    }

    setTimeout(() => {
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <label htmlFor="score" className="block mb-2 font-semibold">
        Enter your JEE Main 2024 score:
      </label>
      <input
        id="score"
        type="number"
        className="border border-gray-300 rounded px-3 py-1 mb-4 w-full"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={predict}
      >
        Predict Percentile and Rank
      </button>
      {showResult && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Predicted Percentile:</strong> {percentile}
          <br />
          <strong>Predicted Rank:</strong> {rank}
        </div>
      )}
    </div>
  );
};

export default JeeMainPredictor;
