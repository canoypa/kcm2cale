import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { ShipEquip } from "~/models/equip";
import { SelectEquipAtom } from "../store/select-equip";

export const useSelectEquip = () => {
  const setSelectEquip = useSetRecoilState(SelectEquipAtom);

  const selectEquip = useCallback(
    (target: ShipEquip) => {
      setSelectEquip({ open: true, target });
    },
    [setSelectEquip]
  );

  return selectEquip;
};
