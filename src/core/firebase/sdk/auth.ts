import { connectAuthEmulator, getAuth as originalGetAuth } from "firebase/auth";
import { firebaseApp } from "./app";

export const getAuth = () => originalGetAuth(firebaseApp);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(getAuth(), "http://localhost:9099", {
    disableWarnings: true,
  });
}
