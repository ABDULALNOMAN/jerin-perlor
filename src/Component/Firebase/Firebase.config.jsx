import { initializeApp } from "firebase/app";
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