import { Dialog } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useSelectShip } from "../hooks/select-ship";

const SelectShip = dynamic(() => import("./SelectShip"));

export const SelectShipDialog: FC = () => {
  const { data: selectState, reset: resetSelectState } = useSelectShip();

  const onClose = useCallback(() => {
    resetSelectState();
  }, [resetSelectState]);

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      {selectState.open && (
        <SelectShip target={selectState.target} onClose={onClose} />
      )}
    </Dialog>
  );
};
