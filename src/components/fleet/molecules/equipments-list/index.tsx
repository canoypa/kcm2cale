import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { EquipmentsState } from "../../../../store/organize/equipments";
import * as styles from "./styles";

type Props = {
  shipEquipments: Array<{
    shipId: string;
    slotNo: number;
    equipmentId: string;
  }>;
  swapEquipment: (slotNo: number, equipmentId: string) => void;
};
export const EquipmentList: FC<Props> = ({ shipEquipments, swapEquipment }) => {
  const equipments = useRecoilValue(EquipmentsState);

  const handlerEquipmentClick = (preEqId: string) => {
    const shipEquipment = shipEquipments.find((v) => v.equipmentId === preEqId);
    if (!shipEquipment) throw new Error("Error");

    const { slotNo, equipmentId: preEquipmentId } = shipEquipment;
    swapEquipment(slotNo, preEquipmentId);
  };

  const items = shipEquipments.map(({ equipmentId }) => {
    const equipment = equipments.find((v) => v.equipmentId === equipmentId)
      ?.equipment;
    if (!equipment) throw new Error("Error: 装備が見つからない");

    return {
      value: equipmentId,
      label: <span className={styles.chipLabel}>{equipment.name}</span>,
    };
  });

  return (
    <Grid container columnGap={1} wrap="nowrap">
      {items.map((v) => {
        const _handlerEquipmentClick = () => handlerEquipmentClick(v.value);
        return (
          <Grid item>
            <Chip
              variant="outlined"
              label={v.label}
              onClick={_handlerEquipmentClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
