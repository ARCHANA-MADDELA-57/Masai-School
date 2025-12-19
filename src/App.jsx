import { useState } from 'react';

// 1. Create ComponentA (Shown when status is true)
const ComponentA = () => {
  return <h2>Status is TRUE</h2>;
};

// 2. Create ComponentB (Shown when status is false)
const ComponentB = () => {
  return <h2>Status is FALSE</h2>;
};

function App() {
  // 3. Manage 'status' state using useState (default: false)
  const [status, setStatus] = useState(false);

  // 4. Function to toggle the state
  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Status Toggle Component</h1>
      
      {/* 5. The Button to trigger the change */}
      <button onClick={toggleStatus}>
        Toggle Status
      </button>

      <hr />

      {/* 6. Use conditional rendering (? :) to switch components */}
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;