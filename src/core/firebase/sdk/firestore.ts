import {
  connectFirestoreEmulator,
  getFirestore as originalGetFirestore,
} from "firebase/firestore";
import { firebaseApp } from "./app";

export const getFirestore = () => originalGetFirestore(firebaseApp);

if (process.env.NODE_ENV === "development") {
  connectFirestoreEmulator(getFirestore(), "localhost", 8080);
}
