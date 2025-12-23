import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Todos>
      <div className="App">
        <h1>Context Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Todos>
  );
}

export default App;