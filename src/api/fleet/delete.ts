import { deleteDoc } from "@firebase/firestore";
import { deleteEquipDocs } from "../equip/delete";
import { deleteShipDocs } from "../ship/delete";
import { getFleetDocReference } from "./ref";

export const deleteFleetDoc = async (fleetId: string) => {
  await Promise.all([deleteShipDocs(fleetId), deleteEquipDocs(fleetId)]);

  const ref = getFleetDocReference(fleetId);
  await deleteDoc(ref);
};
