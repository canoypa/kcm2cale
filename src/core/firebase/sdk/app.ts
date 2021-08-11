import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcGdiIFIksZ_k7kkwtFB57n84Ri9NjkWo",
  authDomain: "kcm2cale.firebaseapp.com",
  projectId: "kcm2cale",
  storageBucket: "kcm2cale.appspot.com",
  messagingSenderId: "719133698825",
  appId: "1:719133698825:web:5bd598038750d7095481d8",
  measurementId: "G-VH9GB7XRVY",
};

export const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
