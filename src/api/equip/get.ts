import { getDoc, getDocs, QueryConstraint } from "firebase/firestore";
import { FirestoreFleetEquipmentsConverter } from "~/core/firestore-converter/equipments";
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
