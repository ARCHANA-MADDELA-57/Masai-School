import React, { useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const Todos = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add a todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(), // Unique ID
      title: title
    };
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    // We pass the state and functions into the 'value' prop
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default Todos;