import { atom } from "recoil";
import { EquipmentData } from "../../../models/equipment/types";
import { ShipId } from "../ships";

export type SlotNo = number;
export type EquipmentId = string;

export type RiggingStateValue = {
  shipId: ShipId;
  slotNo: SlotNo;
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
