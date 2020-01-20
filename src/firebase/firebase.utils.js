import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3dM9hkM9MAVgNIwNZ-iSR9vp_8rTmXrM",
  authDomain: "clothing-db-819ec.firebaseapp.com",
  databaseURL: "https://clothing-db-819ec.firebaseio.com",
  projectId: "clothing-db-819ec",
  storageBucket: "clothing-db-819ec.appspot.com",
  messagingSenderId: "755551852062",
  appId: "1:755551852062:web:2fabdf057a3bfe1164000f",
  measurementId: "G-13QS4THJGS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account " });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
