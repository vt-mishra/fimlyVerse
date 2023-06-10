// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUsYJTMXrhlZUq5RsjBK55lIo5uR3wR8Y",
  authDomain: "filmlyverse.firebaseapp.com",
  projectId: "filmlyverse",
  storageBucket: "filmlyverse.appspot.com",
  messagingSenderId: "800508652089",
  appId: "1:800508652089:web:649b749851d7a83d147be8",
  measurementId: "G-S9ML7WBQPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;