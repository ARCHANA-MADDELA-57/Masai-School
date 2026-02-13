import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader><CardTitle>Todo List</CardTitle></CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task..." />
          <Button onClick={addTodo}>Add</Button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center gap-2 p-2 border rounded">
              <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
              <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}