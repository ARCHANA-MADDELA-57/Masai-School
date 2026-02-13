import React from 'react';
import Counter from './Counter'; // 1. Make sure the path is correct

function App() {
  return (
    <div className="App">
      <h1>My Assignment</h1>
      <Counter /> {/* 2. This tag must be here to show the component */}
    </div>
  );
}

export default App;