import { createContext } from "react";
import { EmptyFireShip, FireShip } from "../../../../models/fleet";

interface SwapShipContextInterface {
  (currentShip: FireShip | EmptyFireShip): void;
}

export const SwapShipContext = createContext<SwapShipContextInterface>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
);
