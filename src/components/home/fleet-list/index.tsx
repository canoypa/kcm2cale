import { FC } from "react";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { FleetCard } from "../fleet-card";
import * as styles from "./styles";

type Props = {
  fleetList: LocalFleetData_v1[];
};
export const FleetList: FC<Props> = ({ fleetList }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {fleetList.map((v) => (
        <FleetCard key={v.id} fleetData={v} />
      ))}
    </div>
  </div>
);
