import {
  connectFirestoreEmulator,
  getFirestore as originalGetFirestore,
} from "firebase/firestore";
import { IS_PRODUCTION } from "../../env";
import { firebaseApp } from "./app";

export const getFirestore = () => originalGetFirestore(firebaseApp);

if (!IS_PRODUCTION) {
  connectFirestoreEmulator(getFirestore(), "localhost", 8080);
}
