import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { EquipsData } from "../../../../data/equip";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { Equip } from "../../../../models/equip";
import { CharClamp } from "../../../common/clamp";

type Props = {
  shipEquips: Equip[];
  swapEquip: (equip: Equip) => void;
};
export const EquipList: FC<Props> = ({ shipEquips, swapEquip }) => {
  const isOwner = useIsFleetOwner();

  const handlerEquipClick = (preEq: Equip) => {
    swapEquip(preEq);
  };

  const items = shipEquips.map((eq) => {
    const equip = EquipsData.find((v) => v.no === eq.no);
    if (!equip) throw new Error("Error: 装備が見つからない");

    return {
      value: eq,
      label: <CharClamp count={20}>{equip.name}</CharClamp>,
    };
  });

  return (
    <Grid container spacing={1} wrap="nowrap">
      {items.map((v) => {
        const _handlerEquipClick = () => handlerEquipClick(v.value);
        return (
          <Grid key={v.value.id} item>
            <Chip
              variant="outlined"
              label={v.label}
              onClick={isOwner ? _handlerEquipClick : undefined}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
