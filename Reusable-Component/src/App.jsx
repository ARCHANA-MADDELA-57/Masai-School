// App.jsx
import MessageCard from './MessageCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Message Board</h1>
      
      {/* Rendering the component multiple times with different props */}
      <MessageCard 
        title="Welcome!" 
        message="Thanks for visiting our React application." 
      />
      
      <MessageCard 
        title="Update" 
        message="We have added new features to the dashboard." 
      />
      
      <MessageCard 
        title="Alert" 
        message="Your subscription is expiring in 3 days." 
      />
      
      <MessageCard 
        title="Success" 
        message="Profile settings have been saved successfully." 
      />
    </div>
  );
}

export default App;