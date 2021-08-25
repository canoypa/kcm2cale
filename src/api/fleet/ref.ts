import { collection, doc, query, QueryConstraint } from "firebase/firestore";
import { getFirestore } from "~/core/firebase/sdk/firestore";

const FLEET_COLLECTION_NAME = "fleets";

export const getFleetCollectionReference = () => {
  return collection(getFirestore(), FLEET_COLLECTION_NAME);
};

export const getFleetDocReference = (fleetId: string) => {
  return doc(getFleetCollectionReference(), fleetId);
};

export const getFleetDocsQuery = (...queries: QueryConstraint[]) => {
  return query(getFleetCollectionReference(), ...queries);
};
