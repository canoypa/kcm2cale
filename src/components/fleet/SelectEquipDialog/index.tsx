import { Dialog } from "@material-ui/core";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useSelectEquip } from "../hooks/select-equip";

const SelectEquip = dynamic(() => import("./SelectEquip"));

export const SelectEquipDialog: FC = () => {
  const { data: selectState, reset: resetSelectState } = useSelectEquip();

  const onClose = useCallback(() => {
    resetSelectState();
  }, [resetSelectState]);

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      {selectState.open && (
        <SelectEquip target={selectState.target} onClose={onClose} />
      )}
    </Dialog>
  );
};
