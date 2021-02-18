import { FC, MouseEventHandler, ReactElement } from "react";
import { classNames } from "../../../../util/class-names";
import { RequireOne } from "../../../../util/types";
import * as styles from "./styles";

type LabelPropType = RequireOne<{
  label: string;
  children: string;
}>;

export type Props = {
  type?: "extended";
  icon: ReactElement;
  onClick?: MouseEventHandler;
} & LabelPropType;
export const FloatingActionButton: FC<Props> = ({
  type,
  icon,
  children,
  label,
  onClick,
}) => {
  const classnames = classNames(styles.root, {
    [styles.extended]: type === "extended",
  });

  return (
    <button className={styles.container} onClick={onClick}>
      <div className={classnames}>
        <i className={styles.icon} aria-hidden="true">
          {icon}
        </i>
        <span className={styles.label}>{children || label}</span>
      </div>
    </button>
  );
};
