import "firebase/auth";
import { firebase } from "../app";
import { ProviderIdValue } from "./types";

export const firebaseAuth = firebase.auth;

export const createProvider = (providerId: ProviderIdValue) => {
  if (providerId === "google") return new firebaseAuth.GoogleAuthProvider();
  if (providerId === "twitter") return new firebaseAuth.TwitterAuthProvider();
  throw new Error("Error: 不明なプロバイダ");
};
