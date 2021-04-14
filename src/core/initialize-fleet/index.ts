import { nanoid } from "nanoid";
import {
  CallbackInterface,
  useGotoRecoilSnapshot,
  useRecoilCallback,
} from "recoil";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDateState,
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
  IsNewFleetState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";
import { FleetData } from "../fleet-data/types";
import { decodeFleetStates } from "../persistence/local-fleet-data";

interface InitializeFleetArgs {
  fleetData: FleetData | null;
}
export const initializeFleet = ({ snapshot }: CallbackInterface) => ({
  fleetData,
}: InitializeFleetArgs) => {
  // Fixme
  // eslint-disable-next-line array-callback-return
  const initSnapshot = snapshot.map(({ reset, set }) => {
    reset(IsNewFleetState);
    reset(FleetDateState);
    reset(FleetNameState);
    reset(FleetDescriptionState);
    reset(FleetTypeState);
    reset(FleetState);
    reset(ShipsState);
    reset(RiggingState);
    reset(EquipmentsState);

    if (fleetData === null) {
      const geneFleetId = nanoid(16);
      set(FleetIdState, geneFleetId);
    }
  });

  if (fleetData === null) {
    return initSnapshot;
  }

  const fleetStates = decodeFleetStates(fleetData);

  const fleet: FleetState = [];
  const ships: ShipsState = [];
  const rigging: RiggingState = [];
  const equipments: EquipmentsState = [];

  fleetStates.fleet.forEach((v) => {
    fleet.push(v);
  });
  fleetStates.ships.forEach((v) => {
    ships.push(v);
  });

  fleetStates.rigging.forEach((v) => {
    rigging.push(v);
  });
  fleetStates.equipments.forEach((v) => {
    equipments.push(v);
  });

  // Fixme
  // eslint-disable-next-line array-callback-return
  const loadedSnapshot = initSnapshot.map(({ set }) => {
    set(IsNewFleetState, false);

    set(FleetIdState, fleetStates.fleetId);
    set(FleetDateState, fleetStates.fleetDate);
    set(FleetNameState, fleetStates.fleetName);
    set(FleetDescriptionState, fleetStates.fleetDescription);
    set(FleetTypeState, fleetStates.fleetType);

    set(FleetState, fleet);
    set(ShipsState, ships);

    set(RiggingState, rigging);
    set(EquipmentsState, equipments);
  });

  return loadedSnapshot;
};

export const useInitFleet = () => {
  const gotoSnapshot = useGotoRecoilSnapshot();
  const initFleetCallback = useRecoilCallback(initializeFleet);

  const initFleet = (fleetData: FleetData | null) => {
    const snapshot = initFleetCallback({ fleetData });
    gotoSnapshot(snapshot);
  };

  return initFleet;
};
