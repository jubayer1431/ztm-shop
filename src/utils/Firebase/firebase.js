// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Firebase configuration
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
const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

// getAuth() create auth instance
export const firebaseAuth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(firebaseAuth, googleAuthProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(firebaseAuth, googleAuthProvider);

// Firestore configuration
export const db = getFirestore();
export const createUserDocFromAuth = async (
  userAuth,
  additionalInfoObject = {}
) => {
  if (!userAuth) return;

  // creating a document [It won't store to the firestore immediately, It just create a instance]
  const userDocRef = doc(db, "User", userAuth.uid);

  // It will return a snapShot Object if the document exist
  const userSnapshot = await getDoc(userDocRef);

  // If Document doesn't exist try to create a new one
  if (!userSnapshot.exists()) {
    try {
      // getting some fields from Firebase Auth to store User data fields in firestore User collection
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // Storing UserDoc into Firestore. setDoc(docInstance, {data fields Object})
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfoObject,
      });
    } catch (e) {
      console.log("Error Creating User => " + e.message);
    }
  }

  return userDocRef;
};
export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};
