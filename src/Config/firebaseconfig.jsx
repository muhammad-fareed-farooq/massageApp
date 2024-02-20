
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRen0w_xFcbh8CWIdt0LNi9vGhfQK8W_Y",
  authDomain: "masseging-app-8a527.firebaseapp.com",
  projectId: "masseging-app-8a527",
  storageBucket: "masseging-app-8a527.appspot.com",
  messagingSenderId: "157894566432",
  appId: "1:157894566432:web:2f2a5b1876e21ed1631245"
};

// Initialize Firebase
const firbaseapp = initializeApp(firebaseConfig);
const auth = getAuth (firbaseapp)
const database = getDatabase (firbaseapp)

export {firbaseapp,auth,database}