import { FC, ReactElement } from "react";
import { classNames } from "../../../../util/class-names";
import { RequireOne } from "../../../../util/types";
import * as styles from "./styles";

type LabelPropType = RequireOne<{
  label: string;
  children: string;
}>;

export type Props = {
  type?: "text" | "outline" | "contained";
  icon?: ReactElement;
  onClick?: () => void;
} & LabelPropType;
export const Button: FC<Props> = ({
  type = "text",
  icon,
  children,
  label,
  onClick,
}) => {
  const classnames = classNames(
    styles.root,
    { [styles.text]: type === "text" },
    { [styles.outline]: type === "outline" },
    { [styles.contained]: type === "contained" }
  );

  return (
    <button className={styles.container} onClick={onClick}>
      <div className={classnames}>
        {icon && (
          <i className={styles.icon} aria-hidden="true">
            {icon}
          </i>
        )}
        <span>{children || label}</span>
        <div className={styles.state}></div>
      </div>
    </button>
  );
};
