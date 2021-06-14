import {
  CallbackInterface,
  useGotoRecoilSnapshot,
  useRecoilCallback,
} from "recoil";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
  IsNewFleetState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";
import { FleetStates } from "../persistence/create-fleet-states";
import { generateFleetId } from "../util/generate-id";

interface InitializeFleetArgs {
  fleetData: FleetStates | null;
}
export const initializeFleet = ({ snapshot }: CallbackInterface) => ({
  fleetData,
}: InitializeFleetArgs) => {
  // Fixme
  // eslint-disable-next-line array-callback-return
  const initSnapshot = snapshot.map(({ reset, set }) => {
    reset(IsNewFleetState);
    reset(FleetNameState);
    reset(FleetDescriptionState);
    reset(FleetTypeState);
    reset(FleetState);
    reset(ShipsState);
    reset(RiggingState);
    reset(EquipmentsState);

    if (fleetData === null) {
      const geneFleetId = generateFleetId();
      set(FleetIdState, geneFleetId);
    }
  });

  if (fleetData === null) {
    return initSnapshot;
  }

  // Fixme
  // eslint-disable-next-line array-callback-return
  const loadedSnapshot = initSnapshot.map(({ set }) => {
    set(IsNewFleetState, false);

    set(FleetIdState, fleetData.fleetId);
    set(FleetNameState, fleetData.fleetName);
    set(FleetDescriptionState, fleetData.fleetDescription);
    set(FleetTypeState, fleetData.fleetType);

    set(FleetState, fleetData.fleet);
    set(ShipsState, fleetData.ships);

    set(RiggingState, fleetData.rigging);
    set(EquipmentsState, fleetData.equipments);
  });

  return loadedSnapshot;
};

export const useInitFleet = () => {
  const gotoSnapshot = useGotoRecoilSnapshot();
  const initFleetCallback = useRecoilCallback(initializeFleet);

  const initFleet = (fleetData: FleetStates | null) => {
    const snapshot = initFleetCallback({ fleetData });
    gotoSnapshot(snapshot);
  };

  return initFleet;
};
