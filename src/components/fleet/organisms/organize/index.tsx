import { FC } from "react";
import { Fleet } from "../../molecules/fleet";
import { FleetHeader } from "../../molecules/fleet-header";
import { useStyles } from "./styles";

export const Organize: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FleetHeader />
      <div className={classes.fleetArea}>
        <Fleet />
      </div>
    </div>
  );
};
