import { FC, MouseEventHandler, ReactElement } from "react";
import { classNames } from "../../../../util/class-names";
import * as styles from "./styles";

export type IconButtonProps = {
  icon: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export const IconButton: FC<IconButtonProps> = ({ icon, ...attrs }) => (
  <button className={classNames(styles.root)} {...attrs}>
    <i aria-hidden="true">{icon}</i>
    <div className={styles.state}></div>
  </button>
);
