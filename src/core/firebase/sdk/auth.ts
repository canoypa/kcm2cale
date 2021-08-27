import { connectAuthEmulator, getAuth as originalGetAuth } from "firebase/auth";
import { IS_PRODUCTION } from "../../env";
import { firebaseApp } from "./app";

export const getAuth = () => originalGetAuth(firebaseApp);

if (!IS_PRODUCTION) {
  connectAuthEmulator(getAuth(), "http://localhost:9099", {
    disableWarnings: true,
  });
}
