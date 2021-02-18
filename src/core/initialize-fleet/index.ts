import { CallbackInterface } from "recoil";
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

export const initializeFleet = ({ set, reset }: CallbackInterface) => (
  localFleetData: LocalFleetData_v1 | null
) => {
  reset(FleetDateState);
  reset(FleetNameState);
  reset(FleetDescriptionState);
  reset(FleetTypeState);
  reset(FleetState);
  reset(ShipsState);
  reset(RiggingState);
  reset(EquipmentsState);

  if (localFleetData === null) return;

  const fleetStates = createFleetStates(localFleetData);

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