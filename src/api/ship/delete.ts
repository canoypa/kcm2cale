import { deleteDoc, writeBatch } from "@firebase/firestore";
import { getFirestore } from "~/core/firebase/sdk/firestore";
import { getShipDocs } from "./get";
import { getShipDocReference } from "./ref";

export const deleteShipDoc = async (fleetId: string, shipId: string) => {
  const ref = getShipDocReference(fleetId, shipId);
  await deleteDoc(ref);
};

export const deleteShipDocs = async (fleetId: string) => {
  const firestore = getFirestore();
  const shipDocs = await getShipDocs(fleetId);

  const batch = writeBatch(firestore);
  shipDocs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
};
