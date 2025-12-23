import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ id }) => {
  const { todos, deleteTodo } = useContext(TodoContext);
  
  // Find this specific todo's data from the global context
  const currentTodo = todos.find(t => t.id === id);

  if (!currentTodo) return null;

  return (
    <li>
      <span>{currentTodo.title}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;