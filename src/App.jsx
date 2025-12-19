import React, { useState } from 'react';

export default function App() {
  // Requirement: Store a boolean to track state
  const [isRed, setIsRed] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2>Q:2 Conditional Styling</h2>

      {/* Requirement: Style changes using conditional inline styling */}
      <div 
        style={{ 
          width: '200px', 
          height: '100px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '8px',
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: isRed ? 'red' : 'blue' // The Condition
        }}
      >
        I am {isRed ? 'RED' : 'BLUE'}
      </div>

      <button 
        onClick={() => setIsRed(!isRed)} 
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Toggle Color
      </button>
    </div>
  );
}