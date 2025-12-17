// UserProfile.jsx
import React from 'react';
import UserInfo from './UserInfo'; // Import the child

const UserProfile = () => {
  // 1. Store user details
  const userName = "Jane Doe";
  const userAge = 28;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Parent: UserProfile</h1>
      
      {/* 2. Pass props down to UserInfo */}
      <UserInfo name={userName} age={userAge} />
    </div>
  );
};

export default UserProfile;