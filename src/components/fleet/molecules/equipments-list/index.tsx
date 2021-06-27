import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { EquipmentsData } from "../../../../data/equipment";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { FireEquipment } from "../../../../models/fleet";
import { EquipmentId, SlotNo } from "../../../../store/organize/equipments";
import { CharClamp } from "../../../common/clamp";

type Props = {
  shipEquipments: FireEquipment[];
  swapEquipment: (slotNo: SlotNo, equipmentId: EquipmentId) => void;
};
export const EquipmentList: FC<Props> = ({ shipEquipments, swapEquipment }) => {
  const isOwner = useIsFleetOwner();

  const handlerEquipmentClick = (preEqId: EquipmentId) => {
    const shipEquipment = shipEquipments.find((v) => v.id === preEqId);
    if (!shipEquipment) throw new Error("Error");

    const { slotNo, id: preEquipmentId } = shipEquipment;
    swapEquipment(slotNo, preEquipmentId);
  };

  const items = shipEquipments.map(({ id, no }) => {
    const equipment = EquipmentsData.find((v) => v.no === no);
    if (!equipment) throw new Error("Error: 装備が見つからない");

    return {
      value: id,
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
              onClick={isOwner ? _handlerEquipmentClick : undefined}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
