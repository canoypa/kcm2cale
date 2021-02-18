import { atom } from "recoil";
import { EquipmentData } from "../../../modules/equipment/types";

export type RiggingStateValue = {
  shipId: string;
  slotNo: number;
  equipmentId: string;
};

export type RiggingState = RiggingStateValue[];
export const RiggingState = atom<RiggingState>({
  key: "RiggingState",
  default: [],
});

export type EquipmentsState = Map<RiggingStateValue, EquipmentData>;
export const EquipmentsState = atom<EquipmentsState>({
  key: "EquipmentsState",
  default: new Map(),
});
