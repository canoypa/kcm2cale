import { atom } from "recoil";
import { FleetShip } from "~/models/ship";

export type SelectShipState =
  | { open: true; target: FleetShip }
  | { open: false; target: null };

export const DefaultSelectShipState: SelectShipState = {
  open: false,
  target: null,
};

export const SelectShipAtom = atom<SelectShipState>({
  key: "select-ship",
  default: DefaultSelectShipState,
});
