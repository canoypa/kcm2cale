import { getDoc, getDocs, QueryConstraint } from "firebase/firestore";
import { FirestoreFleetShipsConverter } from "~/core/firestore-converter/ships";
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
