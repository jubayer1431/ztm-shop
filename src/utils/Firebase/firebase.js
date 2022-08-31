// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-zX0Ox-i50cVobXl9-3pqojTM8sYN6Uo",
  authDomain: "ztm-shop-2022.firebaseapp.com",
  projectId: "ztm-shop-2022",
  storageBucket: "ztm-shop-2022.appspot.com",
  messagingSenderId: "39082040520",
  appId: "1:39082040520:web:337d6ee074b729a48259fd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// getAuth() create auth instance
export const firebaseAuth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(firebaseAuth, provider);
