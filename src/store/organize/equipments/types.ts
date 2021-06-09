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
