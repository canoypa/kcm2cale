import { firebase } from "../app";
import { ProviderIdValue } from "./types";

export const createProvider = (providerId: ProviderIdValue) => {
  if (providerId === "google") return new firebase.auth.GoogleAuthProvider();
  if (providerId === "twitter") return new firebase.auth.TwitterAuthProvider();
  throw new Error("Error: 不明なプロバイダ");
};
