import "firebase/auth";
import { firebaseApp } from "../app";
import { ProviderIdValue } from "./types";

export const firebaseAuth = firebaseApp.auth;

if (!__IS_PRODUCTION__) {
  // @ts-expect-error: 型定義にないオプション引数
  firebaseAuth().useEmulator("http://localhost:9099", {
    // ページ下部に表示されるエミュレータ使用警告メッセージを表示しない
    disableWarnings: true,
  });
}

export const createProvider = (providerId: ProviderIdValue) => {
  if (providerId === "google") return new firebaseAuth.GoogleAuthProvider();
  if (providerId === "twitter") return new firebaseAuth.TwitterAuthProvider();
  throw new Error("Error: 不明なプロバイダ");
};
