import firebase from "firebase/app";
import "firebase/firestore"; // only load parts of it, since firebase library is quite large
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1fZHFNYDrbAy2FB36vaFA1nw17pYHV8w",

  authDomain: "crwn-db-bff02.firebaseapp.com",

  projectId: "crwn-db-bff02",

  storageBucket: "crwn-db-bff02.appspot.com",

  messagingSenderId: "555341568734",

  appId: "1:555341568734:web:ad460b5a07ea541bfe404f",

  measurementId: "G-PYHDQS3SCL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
