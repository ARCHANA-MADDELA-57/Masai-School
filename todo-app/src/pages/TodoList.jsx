import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../api/todoService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(data => setTodos(data.slice(0, 20))); // Slicing for readability
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <strong>{todo.title}</strong> - {todo.completed ? '✅' : '❌'}
            <br />
            <Link to={`/todo/${todo.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;