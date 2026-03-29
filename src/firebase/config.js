import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBroqG14NBdA33ngLHTpoC0_w0fsf6gkuE",
  authDomain: "online-shop-8e16f.firebaseapp.com",
  projectId: "online-shop-8e16f",
  storageBucket: "online-shop-8e16f.firebasestorage.app",
  messagingSenderId: "652320891026",
  appId: "1:652320891026:web:1980a15c7eb5864830464b",
};

const app = initializeApp(firebaseConfig);

// db

export const db = getFirestore(app);

// auth
export const auth = getAuth();
