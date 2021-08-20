import { atom } from "recoil";
import { ShipEquipment } from "~/models/equipment";

export type SelectEquipmentState =
  | { open: true; target: ShipEquipment }
  | { open: false; target: null };

export const DefaultSelectEquipmentState: SelectEquipmentState = {
  open: false,
  target: null,
};

export const SelectEquipmentAtom = atom<SelectEquipmentState>({
  key: "select-equipment",
  default: DefaultSelectEquipmentState,
});
