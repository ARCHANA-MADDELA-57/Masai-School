import { useState } from 'react';

function Counter() {
  // 1. Initialize state with 0
  const [count, setCount] = useState(0);

  // 2. Logic to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      {/* 3. Display the number in an h3 tag */}
      <h3>Count: {count}</h3>
      
      {/* 4. Button to trigger the increment */}
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default Counter;