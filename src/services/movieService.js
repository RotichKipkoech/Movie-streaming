
import { firestore } from '../firebaseConfig';

// Function to fetch movies from Firestore
export const fetchMovies = async () => {
  const snapshot = await firestore.collection('movies').get();
  return snapshot.docs.map((doc) => doc.data());
};

// Other movie-related functions can be added here
