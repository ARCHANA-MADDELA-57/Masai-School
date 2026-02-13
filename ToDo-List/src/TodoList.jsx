import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 1. Fetching data from the API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        // 2. Use .slice(0, 15) to get only the first 15 items
        setTodos(data.slice(0, 15));
      });

    // 3. Cleanup function: Runs when the component unmounts
    return () => {
      alert("cleanup worked");
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {/* 4. Use .map() to iterate and render TodoCard */}
      {todos.map(todo => (
        <TodoCard 
          key={todo.id} 
          userId={todo.userId} 
          title={todo.title} 
          completed={todo.completed} 
        />
      ))}
    </div>
  );
};

export default TodoList;