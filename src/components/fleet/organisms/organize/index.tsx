import { FC } from "react";
import { Fleet } from "../../molecules/fleet";
import { FleetHeader } from "../../molecules/fleet-header";
import * as styles from "./styles";

export const Organize: FC = () => (
  <div className={styles.container}>
    <FleetHeader />
    <div className={styles.fleetArea}>
      <Fleet />
    </div>
  </div>
);
