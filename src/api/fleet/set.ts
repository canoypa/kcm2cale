import { serverTimestamp, setDoc } from "firebase/firestore";
import { generateFleetId } from "~/core/util/generate-id";
import { getFleetDocReference } from "./ref";
import { SettableFleet } from "./types";

const convert = (
  fleet: Partial<SettableFleet>,
  options?: { isNew: boolean }
) => {
  return Object.assign(
    { version: 1, updatedAt: serverTimestamp() },
    options?.isNew && { createdAt: serverTimestamp() },

    fleet.owner && { owner: fleet.owner },
    fleet.title && { title: fleet.title },
    fleet.description && { description: fleet.description },
    fleet.type && { type: fleet.type }
  );
};

export const addFleetDoc = async (fleet: SettableFleet) => {
  const fleetId = generateFleetId();
  const ref = getFleetDocReference(fleetId);
  return await setDoc(ref, convert(fleet, { isNew: true }));
};

export const updateFleetDoc = async (
  fleetId: string,
  fleet: Partial<SettableFleet>
) => {
  const ref = getFleetDocReference(fleetId);
  return await setDoc(ref, convert(fleet), { merge: true });
};
