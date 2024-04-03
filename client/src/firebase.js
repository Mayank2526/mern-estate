// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-8ce88.firebaseapp.com",
  projectId: "mern-8ce88",
  storageBucket: "mern-8ce88.appspot.com",
  messagingSenderId: "546380256395",
  appId: "1:546380256395:web:0969128c54fad8c71f308e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);