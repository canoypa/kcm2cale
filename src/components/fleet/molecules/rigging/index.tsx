import { Chip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Box } from "@material-ui/system";
import { FC } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { useRigging } from "../../../../hooks/organize/rigging";
import { ShipEquip } from "../../../../models/equip";
import { Ship } from "../../../../models/ship";
import { useSelectEquip } from "../../hooks/select-equip";
import { EquipList } from "../equips-list";

type Props = {
  fleetPlace: Ship;
};
export const Rigging: FC<Props> = ({ fleetPlace }) => {
  const { select: selectEquip } = useSelectEquip();
  const { shipEquips, isCanAddNewEquip, newEquipPlace } =
    useRigging(fleetPlace);

  const isOwner = useIsFleetOwner();

  const handlerAddEquip = (eq: ShipEquip) => {
    selectEquip(eq);
  };

  const handlerAddNewEquip = () => handlerAddEquip(newEquipPlace);

  return (
    <Box
      display="flex"
      columnGap={1}
      flexWrap="nowrap"
      sx={{
        overflow: "auto",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <EquipList shipEquips={shipEquips} swapEquip={handlerAddEquip} />
      {isCanAddNewEquip && isOwner && (
        <Chip
          variant="outlined"
          icon={<Add />}
          label="装備を追加"
          onClick={handlerAddNewEquip}
        />
      )}
    </Box>
  );
};
