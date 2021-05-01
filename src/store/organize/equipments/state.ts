import { atom } from "recoil";
import { EquipmentData } from "../../../modules/equipment/types";

type EquipmentId = string;

export type RiggingStateValue = {
  shipId: string;
  slotNo: number;
  equipmentId: EquipmentId;
};

export type EquipmentsStateValue = {
  equipmentId: EquipmentId;
  equipment: EquipmentData;
};

export type RiggingState = RiggingStateValue[];
export const RiggingState = atom<RiggingState>({
  key: "RiggingState",
  default: [],
});

export type EquipmentsState = EquipmentsStateValue[];
export const EquipmentsState = atom<EquipmentsState>({
  key: "EquipmentsState",
  default: [],
});
