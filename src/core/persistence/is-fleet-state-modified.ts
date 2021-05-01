import { Snapshot } from "recoil";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";

export const isFleetStateModified = (snapshot: Snapshot) => {
  // 更新検知対象 State
  const fleetStateAtoms = [
    FleetIdState.key,
    FleetNameState.key,
    FleetDescriptionState.key,
    FleetTypeState.key,
    FleetState.key,
    ShipsState.key,
    RiggingState.key,
    EquipmentsState.key,
  ];

  // 全ての更新された State
  const modifiedStates = [...snapshot.getNodes_UNSTABLE({ isModified: true })];

  // 対象が更新されているか
  const isModified = modifiedStates.some(({ key }) =>
    fleetStateAtoms.some((targetKey) => key === targetKey)
  );

  return isModified;
};
