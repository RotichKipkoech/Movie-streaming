import { firestore } from "../firebaseConfig";

export const addToWishlist = async (movieId, userId) => {
  const docRef = firestore.collection("users").doc(userId).collection("wishlist").doc(movieId);
  try {
    await docRef.set({
      id: movieId,
      watched: false,
    });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

export const removeFromWishlist = async (movieId, userId) => {
  const docRef = firestore.collection("users").doc(userId).collection("wishlist").doc(movieId);
  try {
    await docRef.delete();
  } catch (error) {
    console.error("Error removing from wishlist:", error);
  }
};

export const fetchWishlist = async (userId) => {
  const snapshot = await firestore.collection("users").doc(userId).collection("wishlist").get();
  return snapshot.docs.map((doc) => doc.data());
};
