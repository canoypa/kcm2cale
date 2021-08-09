import firebase from "firebase/compat/app";
import "firebase/compat/app-check";
import {
  preloadAnalytics,
  preloadAuth,
  preloadFirestore,
} from "../sdk/preload";

export { default as firebase } from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcGdiIFIksZ_k7kkwtFB57n84Ri9NjkWo",
  authDomain: "kcm2cale.firebaseapp.com",
  projectId: "kcm2cale",
  storageBucket: "kcm2cale.appspot.com",
  messagingSenderId: "719133698825",
  appId: "1:719133698825:web:5bd598038750d7095481d8",
  measurementId: "G-VH9GB7XRVY",
};

export const firebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

preloadAnalytics({
  firebaseApp,
  setup: (analytics) => analytics(),
});

preloadAuth({
  firebaseApp,
  setup: (auth) => {
    if (process.env.NODE_ENV === "development") {
      // @ts-expect-error: 型定義にないオプション引数
      auth().useEmulator("http://localhost:9099", {
        // ページ下部に表示されるエミュレータ使用警告メッセージを表示しない
        disableWarnings: true,
      });
    }
  },
});

preloadFirestore({
  firebaseApp,
  setup: (firestore) => {
    if (process.env.NODE_ENV === "development") {
      firestore().useEmulator("localhost", 8080);
    }
  },
});
