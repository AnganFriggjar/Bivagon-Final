// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://bivagon-final-24cd0-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyDFR5x7ZDw42-5F3eQY-NLB6ep8UKXjPy8",
  authDomain: "bivagon-final-24cd0.firebaseapp.com",
  projectId: "bivagon-final-24cd0",
  storageBucket: "bivagon-final-24cd0.firebasestorage.app",
  messagingSenderId: "340691686962",
  appId: "1:340691686962:web:3501366c7e7a74b3dfce2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
 
export default db;