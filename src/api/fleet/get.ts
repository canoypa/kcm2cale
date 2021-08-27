import { User } from "firebase/auth";
import {
  DocumentSnapshot,
  getDoc,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { FirestoreFleetConverter } from "~/core/firestore-converter";
import { Fleet } from "~/models/fleet";
import { getFleetDocReference, getFleetDocsQuery } from "./ref";

export const getUserFleetDocs = async (user: User) => {
  const ref = getFleetDocsQuery(where("owner", "==", user.uid)).withConverter(
    FirestoreFleetConverter
  );
  return await getDocs(ref);
};

export const getFleetDoc = async (fleetId: string) => {
  const ref = getFleetDocReference(fleetId).withConverter(
    FirestoreFleetConverter
  );
  return await getDoc(ref);
};

export const listenUserFleetDocs = (
  user: User,
  callback: (snap: QuerySnapshot<Fleet>) => void
) => {
  const ref = getFleetDocsQuery(where("owner", "==", user.uid)).withConverter(
    FirestoreFleetConverter
  );
  return onSnapshot(ref, callback);
};

export const listenFleetDoc = (
  fleetId: string,
  callback: (snap: DocumentSnapshot<Fleet>) => void
) => {
  const ref = getFleetDocReference(fleetId).withConverter(
    FirestoreFleetConverter
  );
  return onSnapshot(ref, callback);
};
