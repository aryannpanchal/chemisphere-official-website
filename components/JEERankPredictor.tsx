'use client'

import { useState } from 'react'

const scoreToPercentile = [
  { min: 281, max: 300, percentile: '100 - 99.99989145' },
  { min: 271, max: 280, percentile: '99.994681 - 99.997394' },
  { min: 263, max: 270, percentile: '99.990990 - 99.994029' },
  { min: 250, max: 262, percentile: '99.977205 - 99.988819' },
  { min: 241, max: 250, percentile: '99.960163 - 99.975034' },
  { min: 231, max: 240, percentile: '99.934980 - 99.956364' },
  { min: 221, max: 230, percentile: '99.901113 - 99.928901' },
  { min: 211, max: 220, percentile: '99.851616 - 99.893732' },
  { min: 201, max: 210, percentile: '99.795063 - 99.845212' },
  { min: 191, max: 200, percentile: '99.710831 - 99.782472' },
  { min: 181, max: 190, percentile: '99.597399 - 99.688579' },
  { min: 171, max: 180, percentile: '99.456939 - 99.573193' },
  { min: 161, max: 170, percentile: '99.272084 - 99.431214' },
  { min: 151, max: 160, percentile: '99.028614 - 99.239737' },
  { min: 141, max: 150, percentile: '98.732389 - 98.990296' },
  { min: 131, max: 140, percentile: '98.317414 - 98.666935' },
  { min: 121, max: 130, percentile: '97.811260 - 98.254132' },
  { min: 111, max: 120, percentile: '97.142937 - 97.685672' },
  { min: 101, max: 110, percentile: '96.204550 - 96.978272' },
  { min: 91,  max: 100, percentile: '94.998594 - 96.064850' },
  { min: 81,  max: 90, percentile: '93.471231 - 94.749479' },
  { min: 71,  max: 80, percentile: '91.072128 - 93.152971' },
  { min: 61,  max: 70, percentile: '87.512225 - 90.702200' },
  { min: 51,  max: 60, percentile: '82.016062 - 86.907944' },
  { min: 41,  max: 50, percentile: '73.287808 - 80.982153' },
  { min: 31,  max: 40, percentile: '58.151490 - 71.302052' },
  { min: 21,  max: 30, percentile: '37.694529 - 56.569310' },
  { min: 11,  max: 20, percentile: '13.495849 - 33.229128' },
  { min: 0,   max: 10, percentile: '0.8435177 - 9.6954066' },
]

export default function RankPredictor() {
  const [inputType, setInputType] = useState<'marks' | 'percentile'>('marks')
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)
    setLoading(true)

    setTimeout(() => {
      const value = parseFloat(inputValue)
      let output = 'Not found'

      if (inputType === 'marks') {
        for (let row of scoreToPercentile) {
          if (value >= row.min && value <= row.max) {
            output = `Estimated Percentile: ${row.percentile}`
            break
          }
        }
      } else {
        for (let row of scoreToPercentile) {
          const [low, high] = row.percentile.split(' - ').map(parseFloat)
          if (value >= low && value <= high) {
            output = `Estimated Marks Range: ${row.min} - ${row.max}`
            break
          }
        }
      }

      setResult(output)
      setLoading(false)
    }, 3000)
  }

  return (
    <div className="w-full bg-white rounded-none px-12 my-24 !bg-black">
      <div className="w-full flex flex-col md:flex-row py-12 ">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-chemisphere mb-4 tracking-tighter">JEE Main Rank Predictor</h1>
          <p className="text-gray-100 mb-6">
            Curious about where you stand in the JEE Main 2025? Enter your marks or percentile to get an instant estimate of your score range or percentile.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-100">
            <li>Based on official NTA percentile data</li>
            <li>Prediction optimized using AI</li>
            <li>Supports both marks and percentile inputs</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setInputType('marks')}
                className={`w-1/2 py-2 rounded-lg font-medium ${
                  inputType === 'marks'
                    ? '!bg-chemisphere text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Enter Marks
              </button>
              <button
                type="button"
                onClick={() => setInputType('percentile')}
                className={`w-1/2 py-2 rounded-lg font-medium ${
                  inputType === 'percentile'
                    ? '!bg-chemisphere text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Enter Percentile
              </button>
            </div>

            <input
              type="number"
              step="any"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={inputType === 'marks' ? 'Your Marks (0 - 300)' : 'Your Percentile (0 - 100)'}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              type="submit"
              className="w-full !bg-chemisphere text-white py-3 rounded-lg"
            >
              Predict
            </button>

            {loading && <p className="text-center text-gray-500">Calculating...</p>}
            {result && !loading && (
              <p className="text-center text-green-600 bg-white rounded-lg font-semibold">{result}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
