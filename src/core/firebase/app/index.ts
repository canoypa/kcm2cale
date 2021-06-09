import firebase from "firebase/app";
import { preloadAuth } from "reactfire";

export { default as firebase } from "firebase/app";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcGdiIFIksZ_k7kkwtFB57n84Ri9NjkWo",
  authDomain: "kcm2cale.firebaseapp.com",
  projectId: "kcm2cale",
  storageBucket: "kcm2cale.appspot.com",
  messagingSenderId: "719133698825",
  appId: "1:719133698825:web:5bd598038750d7095481d8",
  measurementId: "G-VH9GB7XRVY",
});

preloadAuth({
  firebaseApp,
  setup: (auth) => {
    if (!__IS_PRODUCTION__) {
      // @ts-expect-error: 型定義にないオプション引数
      auth().useEmulator("http://localhost:9099", {
        // ページ下部に表示されるエミュレータ使用警告メッセージを表示しない
        disableWarnings: true,
      });
    }
  },
});
