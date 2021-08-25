import { addDoc, setDoc } from "firebase/firestore";
import { getShipCollectionReference, getShipDocReference } from "./ref";
import { SettableShip } from "./types";

const convert = (equip: Partial<SettableShip>) => {
  return Object.assign(
    {},
    equip.fleetNo && { shipId: equip.fleetNo },
    equip.turnNo && { slotNo: equip.turnNo },
    equip.no && { no: equip.no }
  );
};

export const addShipDoc = async (fleetId: string, ship: SettableShip) => {
  const ref = getShipCollectionReference(fleetId);
  return await addDoc(ref, convert(ship));
};

export const updateShipDoc = async (
  fleetId: string,
  shipId: string,
  ship: Partial<SettableShip>
) => {
  const ref = getShipDocReference(fleetId, shipId);
  return await setDoc(ref, convert(ship), { merge: true });
};
