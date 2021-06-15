import { Snapshot } from "recoil";
import { IsNewFleetState } from "../../../store/organize/info";
import { createAllFleetStates } from "../create-fleet-states";
import { encodeLocalFleetData } from "../encode/local";
import { LocalDatabase } from "../local-database";

export const saveToLocal = async (snapshot: Snapshot) => {
  const isNewFleet = await snapshot.getPromise(IsNewFleetState);

  const fleetStates = await createAllFleetStates(snapshot);

  if (isNewFleet) {
    await LocalDatabase.setFleet(
      fleetStates.fleetId,
      encodeLocalFleetData(fleetStates)
    );
  } else {
    await LocalDatabase.updateFleet(
      fleetStates.fleetId,
      encodeLocalFleetData(fleetStates)
    );
  }
};
