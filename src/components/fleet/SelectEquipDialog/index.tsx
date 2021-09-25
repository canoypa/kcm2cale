import { Dialog } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useSelectEquip } from "../hooks/select-equip";
import { useSetEquip } from "./hooks/set-equip";

const SelectEquip = dynamic(() => import("./SelectEquip"));

export const SelectEquipDialog: FC = () => {
  const setEquip = useSetEquip();

  const { data: selectState, reset: resetSelectState } = useSelectEquip();

  const onClose = useCallback(() => {
    resetSelectState();
  }, [resetSelectState]);

  const onSelect = (equipNoToSet: number) => {
    // assertion
    if (selectState.target === null) throw new Error("Error");

    setEquip(selectState.target, equipNoToSet);
    onClose();
  };

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      {selectState.open && (
        <SelectEquip onSelect={onSelect} onClose={onClose} />
      )}
    </Dialog>
  );
};
