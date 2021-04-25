import { cx } from "@emotion/css";
import { cloneElement, FC, ReactElement, useState } from "react";
import { useStyles } from "./styles";

type Props = {
  label?: string;
  value?: string;
  fullWidth?: boolean;
  helper?: string;
  counter?: string;
  error?: boolean;
  children: ReactElement;
};
export const Field: FC<Props> = ({
  label,
  value,
  fullWidth,
  children,
  helper,
  counter,
  error,
}) => {
  const [isFocusin, setIsFocusin] = useState(false);

  const styles = useStyles({
    isFullWidth: Boolean(fullWidth),
    isFocusing: isFocusin,
    hasValue: Boolean(value),
    isError: Boolean(error),
  });

  const handlers = {
    focusin: () => setIsFocusin(true),
    focusout: () => setIsFocusin(false),
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onFocus={handlers.focusin}
        onBlur={handlers.focusout}
      >
        {cloneElement(children, { value })}
        <label className={styles.label}>{label}</label>
        <div className={styles.outlineContainer}>
          <div className={cx(styles.outline, styles.outlineStart)}></div>
          {label && (
            <div className={cx(styles.outline, styles.outlineCenter)}>
              <div className={styles.labelSizing}>{label}</div>
            </div>
          )}
          <div className={cx(styles.outline, styles.outlineEnd)}></div>
        </div>
      </div>
      {(helper || counter) && (
        <div className={styles.helperArea}>
          {helper && <div className={styles.helperText}>{helper}</div>}
          {counter && <div className={styles.counter}>{counter}</div>}
        </div>
      )}
    </div>
  );
};

export { TextInput } from "./input";
export { Select } from "./select";
export { Textarea } from "./textarea";
