import { Dialog } from "@material-ui/core";
import dynamic from "next/dynamic";
import { FC, useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  DefaultSelectEquipmentState,
  SelectEquipmentAtom,
} from "../store/select-equipment";

const SelectEquipment = dynamic(() => import("./SelectEquipment"));

export const SelectEquipmentDialog: FC = () => {
  const [selectState, setSelectState] = useRecoilState(SelectEquipmentAtom);

  const onClose = useCallback(() => {
    setSelectState(DefaultSelectEquipmentState);
  }, [setSelectState]);

  return (
    <Dialog fullScreen open={selectState.open} onClose={onClose}>
      {selectState.open && (
        <SelectEquipment target={selectState.target} onClose={onClose} />
      )}
    </Dialog>
  );
};
