'use client';

import { useState } from 'react';

export default function Home() {
  const [originalSize, setOriginalSize] = useState<number>(1728);
  const [targetSize, setTargetSize] = useState<number>(1440);
  const [inputValue, setInputValue] = useState('');
  const [scaledValue, setScaledValue] = useState<number>(0);

  const calculateScaledValue = () => {
    const scaleFactor = targetSize / originalSize;
    const scaled = Math.round(parseFloat(inputValue) * scaleFactor);
    setScaledValue(scaled);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(String(scaledValue));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      calculateScaledValue();
    }
  };

  return (
    <div className="grid place-items-center min-h-screen w-screen font-[family-name:var(--font-geist-sans)]">
      <div className="p-4 w-full max-w-[25rem] bg-white rounded-xl shadow-md min-h-[10rem]">
        <h2 className="text-xl font-bold mb-4 text-[#060606]">Nasty Pixels</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Original Screen Width (px)
            </label>
            <input
              type="number"
              value={originalSize}
              onChange={(e) => setOriginalSize(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border border-[#06060630] h-[3rem] px-3 text-[#060606] focus:outline-[#060606]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Screen Width (px)
            </label>
            <input
              type="number"
              value={targetSize}
              onChange={(e) => setTargetSize(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border border-[#06060630] h-[3rem] px-3 text-[#060606] focus:outline-[#060606]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input Value (px)
            </label>
            <input
              type="number"
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
              className="mt-1 block w-full rounded-md border border-[#06060630] h-[3rem] px-3 text-[#060606] focus:outline-[#060606]"
            />
          </div>
          <button
            onClick={calculateScaledValue}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#060606] hover:bg-[#06060650] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#060606] h-[3.5rem] !mt-6"
          >
            Calculate Scaled Value
          </button>

          <div className="mt-4 flex items-center justify-between gap-x-2 w-full !mt-[1.5rem]">
            <h3 className="text-sm font-medium text-gray-700">Scaled Value:</h3>
            <p
              className="text-2xl font-bold text-[#060606] cursor-pointer"
              onClick={handleCopyToClipboard}
            >
              {scaledValue}px
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
