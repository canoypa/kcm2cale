import { FC } from "react";
import { IconAdd } from "../../../common/icons";
import * as styles from "./styles";

type Props = {
  setShip: () => void;
};
export const ShipSkeleton: FC<Props> = ({ setShip }) => (
  <div className={styles.root} onClick={setShip}>
    <div className={styles.icon}>
      <IconAdd size={24} />
    </div>
  </div>
);
