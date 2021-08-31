import { Chip, Grid, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { useRigging } from "../../../../hooks/organize/rigging";
import { ShipEquip } from "../../../../models/equip";
import { Ship } from "../../../../models/ship";
import { useSelectEquip } from "../../hooks/select-equip";
import { EquipList } from "../equips-list";

const useStyles = makeStyles(() => ({
  root: {
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

type Props = {
  fleetPlace: Ship;
};
export const Rigging: FC<Props> = ({ fleetPlace }) => {
  const { select: selectEquip } = useSelectEquip();
  const { shipEquips, isCanAddNewEquip, newEquipPlace } =
    useRigging(fleetPlace);

  const isOwner = useIsFleetOwner();

  const classes = useStyles();

  const handlerAddEquip = (eq: ShipEquip) => {
    selectEquip(eq);
  };

  const handlerAddNewEquip = () => handlerAddEquip(newEquipPlace);

  return (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
      className={classes.root}
      style={{
        overflow: "auto",
      }}
    >
      <Grid item>
        <EquipList shipEquips={shipEquips} swapEquip={handlerAddEquip} />
      </Grid>
      {isCanAddNewEquip && isOwner && (
        <Grid item>
          <Chip
            variant="outlined"
            icon={<Add />}
            label="装備を追加"
            onClick={handlerAddNewEquip}
          />
        </Grid>
      )}
    </Grid>
  );
};
