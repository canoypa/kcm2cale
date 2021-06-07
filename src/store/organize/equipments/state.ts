import { atom } from "recoil";
import { DeployedFleetEquipment, EquipmentsStateValue } from "./types";

export type RiggingState = DeployedFleetEquipment[];
export const RiggingState = atom<RiggingState>({
  key: "RiggingState",
  default: [],
});

export type EquipmentsState = EquipmentsStateValue[];
export const EquipmentsState = atom<EquipmentsState>({
  key: "EquipmentsState",
  default: [],
});
