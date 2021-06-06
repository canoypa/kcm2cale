import { Chip, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC } from "react";
import { EquipmentId, SlotNo } from "../../../../store/organize/equipments";
import { FleetStateValue } from "../../../../store/organize/ships";
import { SelectEquipmentDialog } from "../../templates/select-equipment";
import { EquipmentList } from "../equipments-list";
import { useRigging } from "./hook";
import { useStyles } from "./styles";
import { useSelectEquipment } from "./use-select-equipment";

type Props = {
  fleetPlace: FleetStateValue;
};
export const Rigging: FC<Props> = ({ fleetPlace }) => {
  const [isOpenDialog, selecting] = useSelectEquipment();
  const {
    shipEquipments,
    isCanAddNewEquipment,
    newEquipmentSlotNo,
  } = useRigging(fleetPlace);

  const classes = useStyles();

  const handlerAddEquipment = (
    slotNo: SlotNo,
    equipmentId: EquipmentId | null
  ) => selecting.start({ shipId: fleetPlace.shipId, slotNo, equipmentId });

  const handlerAddNewEquipment = () =>
    handlerAddEquipment(newEquipmentSlotNo, null);

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
        {isCanAddNewEquipment && (
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
