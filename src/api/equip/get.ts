import {
  DocumentSnapshot,
  getDoc,
  getDocs,
  onSnapshot,
  QueryConstraint,
  QuerySnapshot,
} from "firebase/firestore";
import { FirestoreFleetEquipmentsConverter } from "~/core/firestore-converter/equipments";
import { Equipment } from "~/models/equipment";
import { getEquipDocReference, getEquipDocsQuery } from "./ref";

export const getEquipDoc = async (fleetId: string, equipId: string) => {
  const ref = getEquipDocReference(fleetId, equipId).withConverter(
    FirestoreFleetEquipmentsConverter
  );
  return await getDoc(ref);
};

export const getEquipDocs = async (
  fleetId: string,
  ...queries: QueryConstraint[]
) => {
  const ref = getEquipDocsQuery(fleetId, ...queries).withConverter(
    FirestoreFleetEquipmentsConverter
  );
  return await getDocs(ref);
};

export const listenEquipDoc = (
  fleetId: string,
  equipId: string,
  callback: (snap: DocumentSnapshot<Equipment>) => void
) => {
  const ref = getEquipDocReference(fleetId, equipId).withConverter(
    FirestoreFleetEquipmentsConverter
  );
  return onSnapshot(ref, callback);
};

export const listenEquipDocs = (
  fleetId: string,
  callback: (snap: QuerySnapshot<Equipment>) => void,
  ...queries: QueryConstraint[]
) => {
  const ref = getEquipDocsQuery(fleetId, ...queries).withConverter(
    FirestoreFleetEquipmentsConverter
  );
  return onSnapshot(ref, callback);
};
