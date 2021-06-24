import { createContext } from "react";
import { FleetShip } from "../../../../store/organize/ships";

interface SwapShipContextInterface {
  (currentShip: FleetShip): void;
}

export const SwapShipContext = createContext<SwapShipContextInterface>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
);
