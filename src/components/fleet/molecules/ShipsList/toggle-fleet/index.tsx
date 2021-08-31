import { ToggleButton, ToggleButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FC, MouseEvent } from "react";
import { FleetNo } from "../../../../../models/ship";

const useStyles = makeStyles(() => ({
  root: {
    "&.MuiToggleButtonGroup-root": {
      display: "flex",
    },

    "& .MuiToggleButton-root": {
      flexGrow: 1,
    },
  },
}));

type Props = {
  value: FleetNo;
  onChange: (fleetNo: FleetNo) => void;
};
export const ToggleFleet: FC<Props> = ({ value, onChange }) => {
  const classes = useStyles();

  const handlerOnSelect = (_: MouseEvent, fleetNo: FleetNo) => {
    if (fleetNo !== null) {
      onChange(fleetNo);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
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
