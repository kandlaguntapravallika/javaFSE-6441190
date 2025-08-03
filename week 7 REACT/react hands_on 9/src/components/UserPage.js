import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your flight tickets.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
