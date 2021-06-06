import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { FC, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { ActiveFleetNoState } from "../../../../../store/organize/info";
import { FleetNo } from "../../../../../store/organize/ships";
import { useStyles } from "./styles";

export const ToggleFleet: FC = () => {
  const [activeFleetNo, setActiveFleetNo] = useRecoilState(ActiveFleetNoState);

  const classes = useStyles();

  const handlerOnSelect = (_: MouseEvent, fleetNo: FleetNo) => {
    if (fleetNo !== null) {
      setActiveFleetNo(fleetNo);
    }
  };

  return (
    <ToggleButtonGroup
      value={activeFleetNo}
      exclusive
      size="small"
      color="primary"
      onChange={handlerOnSelect}
      className={classes.root}
    >
      <ToggleButton value={0}>第一艦隊</ToggleButton>
      <ToggleButton value={1}>第二艦隊</ToggleButton>
    </ToggleButtonGroup>
  );
};
