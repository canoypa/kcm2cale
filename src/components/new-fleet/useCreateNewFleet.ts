import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirestore } from "../../core/firebase/sdk/firestore";
import { generateFleetId } from "../../core/util/generate-id";
import { FleetType } from "../../models/fleet";

const createNewFleetData = (fleetId: string, userId: string) => ({
  version: 1,

  id: fleetId,

  owner: userId,

  title: "",
  description: "",
  type: FleetType.Normal,

  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
});

export const useCreateNewFleet = () => {
  const firestore = getFirestore();

  return async (userId: string) => {
    const newFleetId = generateFleetId();
    const newFleetData = createNewFleetData(newFleetId, userId);

    const newFleetRef = doc(firestore, `fleets/${newFleetId}`);
    await setDoc(newFleetRef, newFleetData);

    return newFleetId;
  };
};
