import { Snapshot } from "recoil";
import { IsNewFleetState } from "../../store/organize/info";
import { createFleetStates } from "./create-fleet-states";
import { LocalDatabase } from "./local-database";
import { encodeLocalFleetData } from "./local-fleet-data";

export const saveToLocal = async (snapshot: Snapshot) => {
  const isNewFleet = snapshot.getPromise(IsNewFleetState);

  const fleetStates = await createFleetStates(snapshot);

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
