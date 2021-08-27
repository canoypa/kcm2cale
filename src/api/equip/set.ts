import { addDoc, setDoc } from "firebase/firestore";
import { getEquipCollectionReference, getEquipDocReference } from "./ref";
import { SettableEquip } from "./types";

const convert = (equip: Partial<SettableEquip>) => {
  return Object.assign(
    {},
    typeof equip.shipId !== "undefined" && { shipId: equip.shipId },
    typeof equip.slotNo !== "undefined" && { slotNo: equip.slotNo },
    typeof equip.no !== "undefined" && { no: equip.no }
  );
};

export const addEquipDoc = async (fleetId: string, equip: SettableEquip) => {
  const ref = getEquipCollectionReference(fleetId);
  return await addDoc(ref, convert(equip));
};

export const updateEquipDoc = async (
  fleetId: string,
  equipId: string,
  equip: Partial<SettableEquip>
) => {
  const ref = getEquipDocReference(fleetId, equipId);
  return await setDoc(ref, convert(equip), { merge: true });
};
