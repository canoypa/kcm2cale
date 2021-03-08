import { FC } from "react";
import { MaterialIcon } from "../../../common/icons";
import * as styles from "./styles";

type Props = {
  setShip: () => void;
};
export const ShipSkeleton: FC<Props> = ({ setShip }) => (
  <div className={styles.root} onClick={setShip}>
    <div className={styles.icon}>
      <MaterialIcon icon="add" size={24} />
    </div>
  </div>
);
