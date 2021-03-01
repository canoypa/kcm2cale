import { Snapshot } from "recoil";
import { EquipmentsState } from "../../store/organize/equipments";
import {
  FleetDateState,
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
} from "../../store/organize/info";
import { ShipsState } from "../../store/organize/ships";

export type FleetStates = {
  fleetId: FleetIdState;
  fleetDate: FleetDateState;
  fleetName: FleetNameState;
  fleetDescription: FleetDescriptionState;
  fleetType: FleetTypeState;
  ships: ShipsState;
  equipments: EquipmentsState;
};

export const createFleetStates = async (
  snapshot: Snapshot
): Promise<FleetStates> => {
  const states = await Promise.all([
    snapshot.getPromise(FleetIdState),
    snapshot.getPromise(FleetDateState),
    snapshot.getPromise(FleetNameState),
    snapshot.getPromise(FleetDescriptionState),
    snapshot.getPromise(FleetTypeState),
    snapshot.getPromise(ShipsState),
    snapshot.getPromise(EquipmentsState),
  ]);

  const [
    fleetId,
    fleetDate,
    fleetName,
    fleetDescription,
    fleetType,
    ships,
    equipments,
  ] = states;

  return {
    fleetId,
    fleetDate,
    fleetName,
    fleetDescription,
    fleetType,
    ships,
    equipments,
  };
};
