import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';

function Main() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      {user ? (
        <div>
          <Profile user={user} />
          <Wishlist userId={user.uid} />
        </div>
      ) : (
        <div>
          <h1>Login or Register</h1>
          <Login />
          <Register />
        </div>
      )}
    </div>
  );
}

export default Main;
