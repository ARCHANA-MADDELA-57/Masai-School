// MessageCard.jsx
function MessageCard(props) {
    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#f9f9f9'
    };
  
    return (
      <div style={cardStyle}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    );
  }
  
  export default MessageCard;