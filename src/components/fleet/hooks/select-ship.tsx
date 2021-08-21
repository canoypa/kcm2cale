import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { FleetShip } from "~/models/ship";
import { SelectShipAtom } from "../store/select-ship";

export const useSelectShip = () => {
  const setSelectShip = useSetRecoilState(SelectShipAtom);

  const selectShip = useCallback(
    (target: FleetShip) => {
      setSelectShip({ open: true, target });
    },
    [setSelectShip]
  );

  return selectShip;
};
