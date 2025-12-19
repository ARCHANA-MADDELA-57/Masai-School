// TodoCard.jsx
const TodoCard = ({ userId, title, completed }) => {
    return (
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
        <h4>User ID: {userId}</h4>
        <p>Task: {title}</p>
        <p>Status: {completed ? "✅ Done" : "⏳ Pending"}</p>
      </div>
    );
  };
  
  export default TodoCard;