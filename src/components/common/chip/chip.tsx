import { FC, ReactChild } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

export type ChipProps = {
  icon?: ReactChild;
  label: ReactChild;
  activated?: boolean;
  onActivated?: () => void;

  children?: never;
};
export const Chip: FC<ChipProps> = ({
  icon,
  label,
  activated,
  onActivated,
}) => {
  const classnames = classNames(styles.root, {
    [styles.active]: activated === true,
  });

  const stateClassNames = classNames(styles.state, {
    [styles.stateActive]: activated === true,
  });

  const handlerOnActivated = () => onActivated?.();

  return (
    <div
      className={classnames}
      tabIndex={0}
      role="row"
      onClick={handlerOnActivated}
    >
      {icon && (
        <i className={styles.icon} aria-hidden="true">
          {icon}
        </i>
      )}
      <span className={styles.label}>{label}</span>
      <div className={stateClassNames}></div>
    </div>
  );
};
