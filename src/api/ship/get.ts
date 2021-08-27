import {
  DocumentSnapshot,
  getDoc,
  getDocs,
  onSnapshot,
  QueryConstraint,
  QuerySnapshot,
} from "firebase/firestore";
import { FirestoreFleetShipsConverter } from "~/core/firestore-converter/ships";
import { Ship } from "~/models/ship";
import { getShipDocReference, getShipDocsQuery } from "./ref";

export const getShipDoc = async (fleetId: string, shipId: string) => {
  const ref = getShipDocReference(fleetId, shipId).withConverter(
    FirestoreFleetShipsConverter
  );
  return await getDoc(ref);
};

export const getShipDocs = async (
  fleetId: string,
  ...queries: QueryConstraint[]
) => {
  const ref = getShipDocsQuery(fleetId, ...queries).withConverter(
    FirestoreFleetShipsConverter
  );
  return await getDocs(ref);
};

export const listenShipDoc = (
  fleetId: string,
  shipId: string,
  callback: (snap: DocumentSnapshot<Ship>) => void
) => {
  const ref = getShipDocReference(fleetId, shipId).withConverter(
    FirestoreFleetShipsConverter
  );
  return onSnapshot(ref, callback);
};

export const listenShipDocs = (
  fleetId: string,
  callback: (snap: QuerySnapshot<Ship>) => void,
  ...queries: QueryConstraint[]
) => {
  const ref = getShipDocsQuery(fleetId, ...queries).withConverter(
    FirestoreFleetShipsConverter
  );
  return onSnapshot(ref, callback);
};
