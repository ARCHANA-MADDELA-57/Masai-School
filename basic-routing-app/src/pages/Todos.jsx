import { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10))); // Display only first 10
  }, []);

  return (
    <div className="todo-grid">
      {todos.map(todo => (
        <div key={todo.id} className="todo-card">
          <h3>{todo.title}</h3>
          <p>Status: {todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;