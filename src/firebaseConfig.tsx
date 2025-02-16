import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACrFB7RakTA51d90s0rO9hyqPv45ZW5Cs",
  authDomain: "pac8-88.firebaseapp.com",
  projectId: "pac8-88",
  storageBucket: "pac8-88.firebasestorage.app",
  messagingSenderId: "488459655949",
  appId: "1:488459655949:web:312f703f874a53b1bdee44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
