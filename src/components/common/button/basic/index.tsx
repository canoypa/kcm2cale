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

  disabled?: boolean;

  onClick?: () => void;
} & LabelPropType;
export const Button: FC<Props> = ({
  type = "text",
  icon,
  children,
  label,
  disabled,
  onClick,
}) => {
  const styles = useStyles({
    type,
    isDisabled: Boolean(disabled),
  });

  const handlerOnClick = () => {
    if (disabled) return;
    onClick?.();
  };

  return (
    <button
      className={styles.container}
      onClick={handlerOnClick}
      disabled={disabled}
    >
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
