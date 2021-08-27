import { atom } from "recoil";
import { ShipEquip } from "~/models/equip";

export type SelectEquipState =
  | { open: true; target: ShipEquip }
  | { open: false; target: null };

export const DefaultSelectEquipState: SelectEquipState = {
  open: false,
  target: null,
};

export const SelectEquipAtom = atom<SelectEquipState>({
  key: "select-equip",
  default: DefaultSelectEquipState,
});
