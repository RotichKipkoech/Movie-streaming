import React from 'react';
import { auth } from '../firebase';

const Dashboard = () => {
  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log('Logged out successfully.');
    }).catch((error) => {
      console.error('Error during logout:', error.message);
    });
  };

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
