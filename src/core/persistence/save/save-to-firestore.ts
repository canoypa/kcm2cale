import { useFirestore } from "reactfire";
import { Snapshot } from "recoil";
import { FleetIdState, IsNewFleetState } from "../../../store/organize/info";
import { createAllFleetStates } from "../create-fleet-states";
import { encodeLocalFleetData } from "../local-fleet-data";

export const useSaveToFirestore = () => {
  const firestore = useFirestore();

  return async (snapshot: Snapshot) => {
    const isNewFleet = await snapshot.getPromise(IsNewFleetState);
    const fleetId = await snapshot.getPromise(FleetIdState);

    if (isNewFleet) {
      const fleetStates = await createAllFleetStates(snapshot);

      await firestore
        // .doc(`fleets/${fleetId}`)
        .doc(`fleets/test`)
        .set(encodeLocalFleetData(fleetStates));
    } else {
      const fleetStates = await createAllFleetStates(snapshot);

      await firestore
        // .doc(`fleets/${fleetId}`)
        .doc(`fleets/test`)
        .update(encodeLocalFleetData(fleetStates));
    }
  };
};
