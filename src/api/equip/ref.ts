import { collection, doc, query, QueryConstraint } from "firebase/firestore";
import { getFleetDocReference } from "../fleet/ref";

const EQUIP_COLLECTION_NAME = "equipments";

export const getEquipCollectionReference = (fleetId: string) => {
  return collection(getFleetDocReference(fleetId), EQUIP_COLLECTION_NAME);
};

export const getEquipDocReference = (fleetId: string, equipId: string) => {
  return doc(getEquipCollectionReference(fleetId), equipId);
};

export const getEquipDocsQuery = (
  fleetId: string,
  ...queries: QueryConstraint[]
) => {
  return query(getEquipCollectionReference(fleetId), ...queries);
};
