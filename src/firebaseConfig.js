import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

	

const firebaseConfig = {
  apiKey: "AIzaSyDMcu2qxcb5oNi7cLOsB11xPiMtQAKaOGA",
  authDomain: "movie-app-cbe7a.firebaseapp.com",
  projectId: "movie-app-cbe7a",
  storageBucket: "movie-app-cbe7a.appspot.com",
  messagingSenderId: "281076083064",
  appId: "1:281076083064:web:ace7f083ea3a649132808d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the necessary variables
export const app = firebase.app();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
