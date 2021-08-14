import { Chip, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { useRigging } from "../../../../hooks/organize/rigging";
import { ShipEquipment } from "../../../../models/equipment";
import { Ship } from "../../../../models/ship";
import { SelectEquipmentDialog } from "../../templates/select-equipment";
import { EquipmentList } from "../equipments-list";
import { useStyles } from "./styles";
import { useSelectEquipment } from "./use-select-equipment";

type Props = {
  fleetPlace: Ship;
};
export const Rigging: FC<Props> = ({ fleetPlace }) => {
  const [isOpenDialog, selecting] = useSelectEquipment();
  const { shipEquipments, isCanAddNewEquipment, newEquipmentPlace } =
    useRigging(fleetPlace);

  const isOwner = useIsFleetOwner();

  const classes = useStyles();

  const handlerAddEquipment = (eq: ShipEquipment) => selecting.start(eq);

  const handlerAddNewEquipment = () => handlerAddEquipment(newEquipmentPlace);

  return (
    <>
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
          <EquipmentList
            shipEquipments={shipEquipments}
            swapEquipment={handlerAddEquipment}
          />
        </Grid>
        {isCanAddNewEquipment && isOwner && (
          <Grid item>
            <Chip
              variant="outlined"
              icon={<Add />}
              label="装備を追加"
              onClick={handlerAddNewEquipment}
            />
          </Grid>
        )}
      </Grid>

      <SelectEquipmentDialog
        open={isOpenDialog}
        onSelect={selecting.end}
        onClose={selecting.cancel}
      />
    </>
  );
};
