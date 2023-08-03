import React, { useState, useEffect } from 'react';
import { addToWishlist, removeFromWishlist, fetchWishlist } from '../services/wishlistService';

function Wishlist({ userId }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist(userId).then((snapshot) => {
      const wishlistData = [];
      snapshot.forEach((doc) => {
        wishlistData.push({ id: doc.id, ...doc.data() });
      });
      setWishlist(wishlistData);
    });
  }, [userId]);

  const handleAddToWishlist = (movieId) => {
    addToWishlist(movieId, userId);
  };

  const handleRemoveFromWishlist = (movieId) => {
    removeFromWishlist(movieId, userId); 
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.id}</h3>
          <p>Watched: {movie.watched.toString()}</p>
          <button onClick={() => handleAddToWishlist(movie.id)}>Add to Wishlist</button>
          <button onClick={() => handleRemoveFromWishlist(movie.id)}>Remove from Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
