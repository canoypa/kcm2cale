import { deleteDoc, where, writeBatch } from "firebase/firestore";
import { getFirestore } from "~/core/firebase/sdk/firestore";
import { getEquipDocs } from "./get";
import { getEquipDocReference } from "./ref";

export const deleteEquipDoc = async (fleetId: string, equipId: string) => {
  const ref = getEquipDocReference(fleetId, equipId);
  await deleteDoc(ref);
};

export const deleteEquipDocs = async (fleetId: string) => {
  const firestore = getFirestore();
  const equipDocs = await getEquipDocs(fleetId);

  const batch = writeBatch(firestore);
  equipDocs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
};

export const deleteShipEquipDocs = async (fleetId: string, shipId: string) => {
  const firestore = getFirestore();
  const equipDocs = await getEquipDocs(fleetId, where("shipId", "==", shipId));

  const batch = writeBatch(firestore);
  equipDocs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
};
