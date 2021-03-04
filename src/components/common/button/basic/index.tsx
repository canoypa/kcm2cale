import { FC, ReactElement } from "react";
import { RequireOne } from "../../../../util/types";
import { useStyles } from "./styles";

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
  const styles = useStyles({
    type,
  });

  return (
    <button className={styles.container} onClick={onClick}>
      <div className={styles.root}>
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
