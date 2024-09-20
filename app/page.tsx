'use client';

import { useState } from 'react';

export default function Home() {
  const [originalSize, setOriginalSize] = useState(1728);
  const [targetSize, setTargetSize] = useState(1440);
  const [inputValue, setInputValue] = useState('');
  const [scaledValue, setScaledValue] = useState('');

  const calculateScaledValue = () => {
    const scaleFactor = targetSize / originalSize;
    const scaled = Math.round(parseFloat(inputValue) * scaleFactor);
    setScaledValue(scaled);
  };
  return (
    <div className="grid place-items-center min-h-screen w-screen font-[family-name:var(--font-geist-sans)]">
      <div className="p-4 w-full max-w-[25rem] bg-white rounded-xl shadow-md min-h-[10rem]">
        <h2 className="text-xl font-bold mb-4">Nasty Pixels</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Original Screen Width (px)
            </label>
            <input
              type="number"
              value={originalSize}
              onChange={(e) => setOriginalSize(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-[3rem] px-3 text-[#060606]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Screen Width (px)
            </label>
            <input
              type="number"
              value={targetSize}
              onChange={(e) => setTargetSize(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-[3rem] px-3 text-[#060606]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input Value (px)
            </label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-[3rem] px-3 text-[#060606]"
            />
          </div>
          <button
            onClick={calculateScaledValue}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-[3.5rem] !mt-6"
          >
            Calculate Scaled Value
          </button>
          {scaledValue && (
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                Scaled Value:
              </h3>
              <p className="text-2xl font-bold text-indigo-600">
                {scaledValue}px
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
