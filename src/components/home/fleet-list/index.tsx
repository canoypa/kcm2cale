import { FC } from "react";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { FleetCard } from "../fleet-card";
import { useStyles } from "./styles";

type Props = {
  fleetList: LocalFleetData_v1[];
};
export const FleetList: FC<Props> = ({ fleetList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {fleetList.map((v) => (
        <FleetCard key={v.id} fleetData={v} />
      ))}
    </div>
  );
};
