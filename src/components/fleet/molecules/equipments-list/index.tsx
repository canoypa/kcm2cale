import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { EquipmentsData } from "../../../../data/equipment";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { Equipment } from "../../../../models/equipment";
import { CharClamp } from "../../../common/clamp";

type Props = {
  shipEquipments: Equipment[];
  swapEquipment: (equipment: Equipment) => void;
};
export const EquipmentList: FC<Props> = ({ shipEquipments, swapEquipment }) => {
  const isOwner = useIsFleetOwner();

  const handlerEquipmentClick = (preEq: Equipment) => {
    swapEquipment(preEq);
  };

  const items = shipEquipments.map((eq) => {
    const equipment = EquipmentsData.find((v) => v.no === eq.no);
    if (!equipment) throw new Error("Error: 装備が見つからない");

    return {
      value: eq,
      label: <CharClamp count={20}>{equipment.name}</CharClamp>,
    };
  });

  return (
    <Grid container spacing={1} wrap="nowrap">
      {items.map((v) => {
        const _handlerEquipmentClick = () => handlerEquipmentClick(v.value);
        return (
          <Grid key={v.value.id} item>
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
