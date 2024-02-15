// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAglvNpe6RvFjgN93yqFy0fBIR9FLcH80I",
  authDomain: "photoshop-5aea6.firebaseapp.com",
  projectId: "photoshop-5aea6",
  storageBucket: "photoshop-5aea6.appspot.com",
  messagingSenderId: "816530609837",
  appId: "1:816530609837:web:d3f55637910003a0cf5824",
  measurementId: "G-2RE72N6EJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);