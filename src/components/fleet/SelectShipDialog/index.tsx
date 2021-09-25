import { Dialog } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useSelectShip } from "../hooks/select-ship";
import { useSetShip } from "./hooks/set-ship";

const SelectShip = dynamic(() => import("./SelectShip"));

export const SelectShipDialog: FC = () => {
  const setShip = useSetShip();

  const { data: selectState, reset: resetSelectState } = useSelectShip();

  const onClose = useCallback(() => {
    resetSelectState();
  }, [resetSelectState]);

  const onSelect = (shipNoToSet: string) => {
    // assertion
    if (selectState.target === null) throw new Error("Error");

    setShip(selectState.target, shipNoToSet);
    onClose();
  };

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      <SelectShip onSelect={onSelect} onClose={onClose} />
    </Dialog>
  );
};
