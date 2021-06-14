import { RecoilValue, Snapshot } from "recoil";
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

export type PartialFleetStates = Pick<FleetStates, "fleetId"> &
  Partial<Omit<FleetStates, "fleetId">>;

// 更新検知対象 State
const fleetStateAtoms = [
  FleetIdState,
  FleetNameState,
  FleetDescriptionState,
  FleetTypeState,
  FleetState,
  ShipsState,
  RiggingState,
  EquipmentsState,
];

const FleetStatesKeyMap = {
  [FleetIdState.key]: "fleetId",
  [FleetNameState.key]: "fleetName",
  [FleetDescriptionState.key]: "fleetDescription",
  [FleetTypeState.key]: "fleetType",
  [FleetState.key]: "fleet",
  [ShipsState.key]: "ships",
  [RiggingState.key]: "rigging",
  [EquipmentsState.key]: "equipments",
};

const gerLabeledPromise = async <T>(
  atom: RecoilValue<T>,
  snapshot: Snapshot
): Promise<[label: string, value: T]> => {
  return [FleetStatesKeyMap[atom.key], await snapshot.getPromise(atom)];
};

const getModifiedFleetStates = (snapshot: Snapshot) => {
  return [...snapshot.getNodes_UNSTABLE({ isModified: true })].filter(
    ({ key }) => {
      return fleetStateAtoms.some((fsa) => key === fsa.key);
    }
  );
};

export const createAllFleetStates = async (
  snapshot: Snapshot
): Promise<FleetStates> => {
  const fleetStates = Object.fromEntries(
    await Promise.all(
      (fleetStateAtoms as Array<RecoilValue<any>>).map((v) =>
        gerLabeledPromise(v, snapshot)
      )
    )
  ) as FleetStates;

  return fleetStates;
};

export const createPartialFleetStates = async (
  snapshot: Snapshot
): Promise<PartialFleetStates> => {
  const fleetStates = Object.fromEntries(
    await Promise.all(
      getModifiedFleetStates(snapshot).map((v) =>
        gerLabeledPromise(v, snapshot)
      )
    )
  ) as PartialFleetStates;

  return fleetStates;
};
