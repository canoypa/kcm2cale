import { collection, doc, query, QueryConstraint } from "firebase/firestore";
import { getFleetDocReference } from "../fleet/ref";

const SHIP_COLLECTION_NAME = "ships";

export const getShipCollectionReference = (fleetId: string) => {
  return collection(getFleetDocReference(fleetId), SHIP_COLLECTION_NAME);
};

export const getShipDocReference = (fleetId: string, shipId: string) => {
  return doc(getShipCollectionReference(fleetId), shipId);
};

export const getShipDocsQuery = (
  fleetId: string,
  ...queries: QueryConstraint[]
) => {
  return query(getShipCollectionReference(fleetId), ...queries);
};
