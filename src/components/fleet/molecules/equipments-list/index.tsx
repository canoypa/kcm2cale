import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  EquipmentId,
  EquipmentsState,
  SlotNo,
} from "../../../../store/organize/equipments";
import { ShipId } from "../../../../store/organize/ships";
import { CharClamp } from "../../../common/clamp";

type Props = {
  shipEquipments: Array<{
    shipId: ShipId;
    slotNo: SlotNo;
    equipmentId: EquipmentId;
  }>;
  swapEquipment: (slotNo: SlotNo, equipmentId: EquipmentId) => void;
};
export const EquipmentList: FC<Props> = ({ shipEquipments, swapEquipment }) => {
  const equipments = useRecoilValue(EquipmentsState);

  const handlerEquipmentClick = (preEqId: EquipmentId) => {
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
      label: <CharClamp count={20}>{equipment.name}</CharClamp>,
    };
  });

  return (
    <Grid container spacing={1} wrap="nowrap">
      {items.map((v) => {
        const _handlerEquipmentClick = () => handlerEquipmentClick(v.value);
        return (
          <Grid key={v.value} item>
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
