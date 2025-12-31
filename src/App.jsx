// App.jsx
import React, { useState, lazy, Suspense } from 'react';

// 1. Implementation of Lazy Loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Performance Optimization</h1>
      
      {/* Counter Section */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(prev => prev + 1)}>
          Increment Counter
        </button>
      </div>

      <hr />

      {/* 2. Suspense is required for Lazy Components */}
      <Suspense fallback={<div>Loading Heavy Section...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;