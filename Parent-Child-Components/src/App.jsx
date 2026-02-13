import React from 'react';
import UserProfile from './UserProfile'; // Import the parent component

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', backgroundColor: '#282c34', padding: '10px', color: 'white' }}>
        <h2>React Props Practice</h2>
      </header>
      
      {/* Rendering the Parent Component */}
      <main>
        <UserProfile />
      </main>
    </div>
  );
}

export default App;