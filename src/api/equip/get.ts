import {
  DocumentSnapshot,
  getDoc,
  getDocs,
  onSnapshot,
  QueryConstraint,
  QuerySnapshot,
} from "firebase/firestore";
import { FirestoreFleetEquipConverter } from "~/core/firestore-converter/equip";
import { Equip } from "~/models/equip";
import { getEquipDocReference, getEquipDocsQuery } from "./ref";

export const getEquipDoc = async (fleetId: string, equipId: string) => {
  const ref = getEquipDocReference(fleetId, equipId).withConverter(
    FirestoreFleetEquipConverter
  );
  return await getDoc(ref);
};

export const getEquipDocs = async (
  fleetId: string,
  ...queries: QueryConstraint[]
) => {
  const ref = getEquipDocsQuery(fleetId, ...queries).withConverter(
    FirestoreFleetEquipConverter
  );
  return await getDocs(ref);
};

export const listenEquipDoc = (
  fleetId: string,
  equipId: string,
  callback: (snap: DocumentSnapshot<Equip>) => void
) => {
  const ref = getEquipDocReference(fleetId, equipId).withConverter(
    FirestoreFleetEquipConverter
  );
  return onSnapshot(ref, callback);
};

export const listenEquipDocs = (
  fleetId: string,
  callback: (snap: QuerySnapshot<Equip>) => void,
  ...queries: QueryConstraint[]
) => {
  const ref = getEquipDocsQuery(fleetId, ...queries).withConverter(
    FirestoreFleetEquipConverter
  );
  return onSnapshot(ref, callback);
};
