import firebase from "firebase/app";

firebase.initializeApp(__FIREBASE_CONFIG__);

export const firebaseApp = firebase;
