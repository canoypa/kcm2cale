import "firebase/auth";
import { firebaseApp } from "../app";
import { ProviderIdValue } from "./types";

export const firebaseAuth = firebaseApp.auth;

if (!__IS_PRODUCTION__) {
  firebaseAuth().useEmulator("https://localhost:9099");
}

export const createProvider = (providerId: ProviderIdValue) => {
  if (providerId === "google") return new firebaseAuth.GoogleAuthProvider();
  if (providerId === "twitter") return new firebaseAuth.TwitterAuthProvider();
  throw new Error("Error: 不明なプロバイダ");
};
