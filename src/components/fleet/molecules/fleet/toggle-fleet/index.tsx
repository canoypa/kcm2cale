import { ToggleButton, ToggleButtonGroup } from "@material-ui/core";
import { FC, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { ActiveFleetNoState } from "../../../../../store/organize/info";

export const ToggleFleet: FC = () => {
  const [activeFleetNo, setActiveFleetNo] = useRecoilState(ActiveFleetNoState);

  const handlerOnSelect = (_: MouseEvent, fleetNo: number) => {
    if (fleetNo !== null) {
      setActiveFleetNo(fleetNo);
    }
  };

  return (
    <ToggleButtonGroup
      value={activeFleetNo}
      exclusive
      fullWidth
      size="small"
      color="primary"
      onChange={handlerOnSelect}
    >
      <ToggleButton value={0}>第一艦隊</ToggleButton>
      <ToggleButton value={1}>第二艦隊</ToggleButton>
    </ToggleButtonGroup>
  );
};
