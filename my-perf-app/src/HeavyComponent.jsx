// HeavyComponent.jsx
import React from 'react';

const HeavyComponent = React.memo(() => {
  console.log("--- HeavyComponent Rendered ---");

  // Simulating a heavy UI section
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>I am a Heavy Component</h3>
      <p>I only render once, even if the parent counter changes!</p>
      <ul>
        {[...Array(5)].map((_, i) => (
          <li key={i}>Expensive Data Row {i + 1}</li>
        ))}
      </ul>
    </div>
  );
});

// Setting a display name for easier debugging
HeavyComponent.displayName = "HeavyComponent";

export default HeavyComponent;