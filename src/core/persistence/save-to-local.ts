import { Snapshot } from "recoil";
import { FleetDateState, IsNewFleetState } from "../../store/organize/info";
import { createFleetStates } from "./create-fleet-states";
import { LocalDatabase } from "./local-database";
import { encodeLocalFleetData } from "./local-fleet-data";

export const saveToLocal = async (_snapshot: Snapshot) => {
  const isNewFleet = _snapshot.getPromise(IsNewFleetState);

  // Fixme
  // eslint-disable-next-line array-callback-return
  const snapshot = _snapshot.map(({ set }) => {
    // Update updatedAt
    const updatedAt = new Date();
    set(FleetDateState, ({ createdAt }) => ({ createdAt, updatedAt }));
  });
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
