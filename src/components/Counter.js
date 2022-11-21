import React, { useState, useEffect } from 'react';

function Counter() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.addEventListener('mousedown', increment)
    return () => {
    document.removeEventListener('mousedown', increment);
  };
  })

  const increment = () => {
    setClickCount((prev) => prev + 1)
    
  }

  return (
      <div>
        <h1>Simple Increment Counter</h1>
        <p>Using useEffect to create and clean-up event listeners</p>
        <p>Document Clicks: {clickCount}</p>
      </div>
  );
}

export default Counter;
