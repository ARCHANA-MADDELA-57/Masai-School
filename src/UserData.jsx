import React, { useState, useEffect } from 'react';

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        // 2. Update state with the user object
        setUser(data);
        // 3. Set loading to false
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty array means this runs once on mount

  // 4. Conditional Rendering: Show "Loading..." if loading is true
  if (loading) {
    return <p>Loading...</p>;
  }

  // 5. Display the specific user details
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserData;