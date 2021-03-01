import { Snapshot } from "recoil";
import { FleetDateState } from "../../store/organize/info";
import { createFleetStates } from "./create-fleet-states";
import { LocalDatabase } from "./local-database";
import { encodeLocalFleetData } from "./local-fleet-data";

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
    encodeLocalFleetData(fleetStates)
  );
};
