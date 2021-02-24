import { CallbackInterface, useRecoilCallback } from "recoil";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDateState,
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";
import { createFleetStates } from "../persistence/create-local-fleet-data";
import { LocalFleetData_v1 } from "../persistence/types";

interface InitializeFleetArgs {
  fleetData: LocalFleetData_v1 | null;
}
export const initializeFleet = ({ set, reset }: CallbackInterface) => ({
  fleetData,
}: InitializeFleetArgs) => {
  reset(FleetDateState);
  reset(FleetNameState);
  reset(FleetDescriptionState);
  reset(FleetTypeState);
  reset(FleetState);
  reset(ShipsState);
  reset(RiggingState);
  reset(EquipmentsState);

  if (fleetData === null) return;

  const fleetStates = createFleetStates(fleetData);

  set(FleetIdState, fleetStates.fleetId);
  set(FleetDateState, fleetStates.fleetDate);
  set(FleetNameState, fleetStates.fleetName);
  set(FleetDescriptionState, fleetStates.fleetDescription);
  set(FleetTypeState, fleetStates.fleetType);

  const fleet: FleetState = [];
  const ships = new Map();
  const rigging: RiggingState = [];
  const equipments = new Map();

  fleetStates.ships.forEach((v, k) => {
    fleet.push(k);
    ships.set(k, v);
  });

  fleetStates.equipments.forEach((v, k) => {
    rigging.push(k);
    equipments.set(k, v);
  });

  set(FleetState, fleet);
  set(ShipsState, ships);

  set(RiggingState, rigging);
  set(EquipmentsState, equipments);
};

export const useInitFleet = () => {
  const initFleetCallback = useRecoilCallback(initializeFleet);

  const initFleet = (fleetData: LocalFleetData_v1 | null) => {
    initFleetCallback({ fleetData });
  };

  return initFleet;
};
