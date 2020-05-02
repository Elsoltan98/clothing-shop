import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnxe-dLvJKJ2n2YZ5OxFzOE272XZ-WOu4",
  authDomain: "clothing-shop-b2ad6.firebaseapp.com",
  databaseURL: "https://clothing-shop-b2ad6.firebaseio.com",
  projectId: "clothing-shop-b2ad6",
  storageBucket: "clothing-shop-b2ad6.appspot.com",
  messagingSenderId: "558326806228",
  appId: "1:558326806228:web:6a2d1605c452b7d1dbad41",
  measurementId: "G-HC1WE18HRQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

// eslint-disable-next-line
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
