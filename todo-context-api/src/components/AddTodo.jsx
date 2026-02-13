import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext); // Pull function from Context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter todo title..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;