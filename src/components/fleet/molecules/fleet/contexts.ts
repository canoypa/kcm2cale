import { createContext } from "react";
import { EmptyShip, Ship } from "../../../../models/ship";

interface SwapShipContextInterface {
  (currentShip: Ship | EmptyShip): void;
}

export const SwapShipContext = createContext<SwapShipContextInterface>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
);
