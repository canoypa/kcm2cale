import { User } from "firebase/auth";
import { getDoc, getDocs, where } from "firebase/firestore";
import { FirestoreFleetConverter } from "~/core/firestore-converter";
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
