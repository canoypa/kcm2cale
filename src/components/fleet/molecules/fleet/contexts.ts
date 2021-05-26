import { createContext } from "react";
import { CurrentShip } from "./use-select-ship";

interface SwapShipContextInterface {
  (currentShip: CurrentShip): void;
}

export const SwapShipContext = createContext<SwapShipContextInterface>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
);
