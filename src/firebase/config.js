import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSI22E6jPypKQq7SDmgDOC9_hrecqgayA",
  authDomain: "products-ac3e2.firebaseapp.com",
  projectId: "products-ac3e2",
  storageBucket: "products-ac3e2.firebasestorage.app",
  messagingSenderId: "853142489251",
  appId: "1:853142489251:web:652ef593b96ca6d27c5716",
};

const app = initializeApp(firebaseConfig);

// db

export const db = getFirestore(app);
