import { Snapshot } from "recoil";
import { createFleetStates } from "./create-fleet-states";
import { createLocalFleetData } from "./create-local-fleet-data";
import { LocalDatabase } from "./local-database";

export const saveToLocal = async (snapshot: Snapshot) => {
  const fleetStates = await createFleetStates(snapshot);

  await LocalDatabase.setFleet(
    fleetStates.fleetId,
    createLocalFleetData(fleetStates)
  );
};
