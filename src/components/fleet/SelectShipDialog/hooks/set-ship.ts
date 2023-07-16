import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { FleetState } from "~/store/organize/info";
import { FleetShip } from "../../../../models/ship";

type UseSetShip = () => (place: FleetShip, ship: string) => void;
export const useSetShip: UseSetShip = () => {
  const [fleet, setFleet] = useRecoilState(FleetState);

  const setShip = useCallback(
    (place: FleetShip, shipNoToSet: string) => {
      const { fleetNo, turnNo } = place;

      const updateIndex = fleet!.ships.findIndex(
        (v) => v.fleetNo === fleetNo && v.turnNo === turnNo
      );

      const newShips = [...fleet!.ships];
      newShips[updateIndex].no = shipNoToSet;

      setFleet({ ...fleet!, ships: newShips });
    },
    [fleet]
  );

  return setShip;
};
