import { Dialog } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react";

const SelectShip = dynamic(() => import("./SelectShip"));

type Props = {
  open: boolean;
  onSelect: (shipNoToSet: string) => void;
  onClose: () => void;
};
export const SelectShipDialog: FC<Props> = ({ open, onSelect, onClose }) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <SelectShip onSelect={onSelect} onClose={onClose} />
    </Dialog>
  );
};
