// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMepnd09nhliCHoJtRV1B7KXmfB3enf0",
  authDomain: "jarin-parlor.firebaseapp.com",
  projectId: "jarin-parlor",
  storageBucket: "jarin-parlor.appspot.com",
  messagingSenderId: "733698604816",
  appId: "1:733698604816:web:f6c5b2298a92fe74d56f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app