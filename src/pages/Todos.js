import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10))); // Fetch first 10
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todos List</h2>
      <button onClick={handleLogout} style={{ marginBottom: '20px' }}>Logout</button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {todos.map(todo => (
          <Link key={todo.id} to={`/todos/${todo.id}`} style={{ padding: '10px', border: '1px solid #ccc', textDecoration: 'none', color: 'black' }}>
            {todo.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;