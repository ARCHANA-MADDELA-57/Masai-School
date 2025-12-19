import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check if count is divisible by 3 and not zero
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // This dependency array ensures it runs only when count changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default Counter;