import { Dialog } from "@material-ui/core";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  DefaultSelectEquipState,
  SelectEquipAtom,
} from "../store/select-equip";

const SelectEquip = dynamic(() => import("./SelectEquip"));

export const SelectEquipDialog: FC = () => {
  const [selectState, setSelectState] = useRecoilState(SelectEquipAtom);

  const onClose = useCallback(() => {
    setSelectState(DefaultSelectEquipState);
  }, [setSelectState]);

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      {selectState.open && (
        <SelectEquip target={selectState.target} onClose={onClose} />
      )}
    </Dialog>
  );
};
