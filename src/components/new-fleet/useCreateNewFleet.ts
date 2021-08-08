import { firebase } from "../../core/firebase/app";
import { generateFleetId } from "../../core/util/generate-id";
import { FleetType } from "../../models/fleet";

const createNewFleetData = (fleetId: string, userId: string) => ({
  version: 1,

  id: fleetId,

  owner: userId,

  title: "",
  description: "",
  type: FleetType.Normal,

  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
});

type UseCreateNewFleet = (
  firestore: firebase.firestore.Firestore
) => (userId: string) => Promise<string>;
export const useCreateNewFleet: UseCreateNewFleet = (firestore) => {
  return async (userId: string) => {
    const newFleetId = generateFleetId();
    const newFleetData = createNewFleetData(newFleetId, userId);

    const newFleetRef = firestore.doc(`fleets/${newFleetId}`);
    await newFleetRef.set(newFleetData);

    return newFleetId;
  };
};
