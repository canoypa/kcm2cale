import { Snapshot } from "recoil";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";

export type FleetStates = {
  fleetId: FleetIdState;
  fleetName: FleetNameState;
  fleetDescription: FleetDescriptionState;
  fleetType: FleetTypeState;
  fleet: FleetState;
  ships: ShipsState;
  rigging: RiggingState;
  equipments: EquipmentsState;
};

export const createFleetStates = async (
  snapshot: Snapshot
): Promise<FleetStates> => {
  const states = await Promise.all([
    snapshot.getPromise(FleetIdState),
    snapshot.getPromise(FleetNameState),
    snapshot.getPromise(FleetDescriptionState),
    snapshot.getPromise(FleetTypeState),
    snapshot.getPromise(FleetState),
    snapshot.getPromise(ShipsState),
    snapshot.getPromise(RiggingState),
    snapshot.getPromise(EquipmentsState),
  ]);

  const [
    fleetId,
    fleetName,
    fleetDescription,
    fleetType,
    fleet,
    ships,
    rigging,
    equipments,
  ] = states;

  return {
    fleetId,
    fleetName,
    fleetDescription,
    fleetType,
    fleet,
    ships,
    rigging,
    equipments,
  };
};
