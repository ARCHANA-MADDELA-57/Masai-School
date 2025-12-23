import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext); // Pull data from Context

  return (
    <ul>
      {todos.map((todo) => (
        // We pass the ID so TodoItem knows which specific item it represents
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;