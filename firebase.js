// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBaMdUkwk1w6omY7YwgkhAaZ6D0-XV99SE",
  authDomain: "trash-app-d1e74.firebaseapp.com",
  databaseURL: "https://trash-app-d1e74-default-rtdb.firebaseio.com",
  projectId: "trash-app-d1e74",
  storageBucket: "trash-app-d1e74.appspot.com",
  messagingSenderId: "244555067947",
  appId: "1:244555067947:web:4c05f1e4a0d557bd00b06e",
  measurementId: "G-B52EL7WD49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

