// UserInfo.jsx
import React from 'react';

const UserInfo = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  );
};

export default UserInfo;