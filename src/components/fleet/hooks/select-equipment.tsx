import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { ShipEquipment } from "~/models/equipment";
import { SelectEquipmentAtom } from "../store/select-equipment";

export const useSelectEquipment = () => {
  const setSelectEquipment = useSetRecoilState(SelectEquipmentAtom);

  const selectEquipment = useCallback(
    (target: ShipEquipment) => {
      setSelectEquipment({ open: true, target });
    },
    [setSelectEquipment]
  );

  return selectEquipment;
};
