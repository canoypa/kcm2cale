import { Snapshot } from "recoil";
import { FleetDateState } from "../../store/organize/info";
import { createFleetStates } from "./create-fleet-states";
import { createLocalFleetData } from "./create-local-fleet-data";
import { LocalDatabase } from "./local-database";

export const saveToLocal = async (_snapshot: Snapshot) => {
  // Fixme
  // eslint-disable-next-line array-callback-return
  const snapshot = _snapshot.map(({ set }) => {
    // Update updatedAt
    const updatedAt = new Date();
    set(FleetDateState, ({ createdAt }) => ({ createdAt, updatedAt }));
  });
  const fleetStates = await createFleetStates(snapshot);

  await LocalDatabase.setFleet(
    fleetStates.fleetId,
    createLocalFleetData(fleetStates)
  );
};
