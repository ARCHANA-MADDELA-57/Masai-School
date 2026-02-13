import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Q:3 Todo List Task</h1>
      
      {/* Button to toggle mounting/unmounting */}
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Unmount Todos" : "Mount Todos"}
      </button>

      <hr />

      {/* Conditional rendering handles the mounting/unmounting */}
      {showTodos ? <TodoList /> : <p>The list has been unmounted.</p>}
    </div>
  );
}

export default App;