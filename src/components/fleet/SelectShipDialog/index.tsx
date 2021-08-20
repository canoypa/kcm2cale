import { Dialog } from "@material-ui/core";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useRecoilState } from "recoil";
import { DefaultSelectShipState, SelectShipAtom } from "../store/select-ship";

const SelectShip = dynamic(() => import("./SelectShip"));

export const SelectShipDialog: FC = () => {
  const [selectState, setSelectState] = useRecoilState(SelectShipAtom);

  const onClose = useCallback(() => {
    setSelectState(DefaultSelectShipState);
  }, [setSelectState]);

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      {selectState.open && (
        <SelectShip target={selectState.target} onClose={onClose} />
      )}
    </Dialog>
  );
};
