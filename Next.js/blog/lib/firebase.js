import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2xZeUcFNpCT5EgMrMPAKdtefxfPTIdY8",
  authDomain: "blog-63752.firebaseapp.com",
  projectId: "blog-63752",
  storageBucket: "blog-63752.appspot.com",
  messagingSenderId: "811021191676",
  appId: "1:811021191676:web:815cfd6a8bc6001df98a79",
  measurementId: "G-JEXE9Y5SNL",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = auth;
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage;
export const firestore = getFirestore;
