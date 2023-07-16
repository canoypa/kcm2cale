import { atom } from "recoil";
import { LocalFleetDataV1 } from "~/core/persistence/types";

export const FleetState = atom<LocalFleetDataV1 | null>({
  key: "_fleet",
  default: null,
});
