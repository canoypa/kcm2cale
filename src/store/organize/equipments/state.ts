import { atom } from "recoil";
import { EquipmentData } from "../../../models/equipment/types";
import { ShipId } from "../ships";

export type SlotNo = number;
export type EquipmentId = string;

/**
 * 装備の配備位置
 */
export type RiggingPlace = {
  shipId: ShipId;
  slotNo: SlotNo;
};

// Todo: 然るべき場所に...
/**
 * 未配備位置の装備データ
 */
export type EmptyShipEquipment = RiggingPlace & {
  equipmentId: null;
};

/**
 * 配備済み位置の装備データ
 */
export type DeployedFleetEquipment = RiggingPlace & {
  equipmentId: EquipmentId;
};

/**
 * 装備データ
 */
export type ShipEquipment = DeployedFleetEquipment | EmptyShipEquipment;

export type EquipmentsStateValue = {
  equipmentId: EquipmentId;
  equipment: EquipmentData;
};

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
