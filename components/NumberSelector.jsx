"use client";

import { useState } from 'react';

const NumberSelector = ({lowerLimit = 0, upperLimit = 100}) => {
    const min = {lowerLimit};
  const [number, setNumber] = useState(lowerLimit);

  const handleScroll = (e) => {
    setNumber(prev => {
      let newValue = prev + (e.deltaY > 0 ? -1 : 1);
      if (newValue < lowerLimit) newValue = lowerLimit;
      if (newValue > upperLimit) newValue = upperLimit;
      return newValue;
    });
  };

  return (
    <div className="bg-[#7e8df149] rounded-lg w-100 h-28 flex justify-center items-center border-[#cccccc] overflow-hidden cursor-pointer text-[#615efc]" onWheel={handleScroll}>      
      <div className="text-4xl font-bold">{number}</div>
    </div>
  );
};

export default NumberSelector;
